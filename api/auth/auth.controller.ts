import { MongoClient } from "mongodb";
import { getDbClient } from "../services/mongodb.service";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {
  userLogin,
  userSignup,
  jwtPayload,
  userOTPRequest,
} from "./auth.schema";
import { errors } from "../error/error.constant";
import { ValidationError } from "yup";
import { FaCommentsDollar } from "react-icons/fa";

export const postLogin = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    let { password } = req.body;
    const dbClient: MongoClient = await getDbClient();

    let body = req.body;
    delete body["password"];

    let result = await dbClient
      .db("links")
      .collection("user")
      .findOne<userLogin>(body, { projection: { _id: 0 } });
    if (!result) {
      throw errors.USER_NOT_FOUND;
    }

    if (await bcrypt.compare(password, result.password)) {
      const token = jwt.sign(
        {
          email: result.email,
          username: result.username,
        },
        process.env.JWT_SECRET || "",
        {
          expiresIn: "1d",
          issuer: "srmkzilla",
        }
      );
      res.status(200).json({
        success: true,
        authToken: token,
      });
    } else {
      throw errors.UNAUTHORIZED;
    }
  } catch (err) {
    next(err);
  }
};

export const postSignup = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    let { username, email, password } = req.body as userSignup;
    const dbClient: MongoClient = await getDbClient();
    let result = await dbClient
      .db("links")
      .collection("user")
      .findOne({ email: email });
    const saltRounds = 12;
    if (result) {
      throw errors.DUPLICATE_USER;
    }
    let usernameExists = await dbClient
      .db("links")
      .collection("user")
      .findOne({ username: username });
    if (usernameExists) {
      throw errors.DUPLICATE_USERNAME;
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    await dbClient
      .db("links")
      .collection("user")
      .insertOne({ username, email, password: hash });

    const token = jwt.sign({ username, email }, process.env.JWT_SECRET || "", {
      expiresIn: "1d",
      issuer: "srmkzilla",
    });
    res.status(200).json({
      success: true,
      authToken: token,
    });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    let payload = req.env.user;
    let user: jwtPayload = JSON.parse(payload);
    if (!user) {
      throw errors.USER_NOT_FOUND;
    } else {
      delete user.iat;
      return res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const getOTP = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    let payload = req.env.user;
    let user: jwtPayload = JSON.parse(payload);
    if (!user) {
      throw errors.USER_NOT_FOUND;
    }
    const dbClient: MongoClient = await getDbClient();

    const OTP = Math.floor(Math.random() * 1000000);
    const createdAt = new Date().getTime();
    await dbClient
      .db("links")
      .collection("otp")
      .insertOne({
        email: user.email,
        otp: OTP,
        createdAt: createdAt,
        expiresAt: createdAt + 10 * 60000,
      });
    return res.status(200).json({
      success: true,
      otp: OTP,
      createdAt: createdAt,
      expiresAt: createdAt + 10 * 60000,
    });
  } catch (err) {
    next(err);
  }
};

export const verifyOTP = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    let payload = req.env.user;
    let user: jwtPayload = JSON.parse(payload);
    if (!user) {
      throw errors.USER_NOT_FOUND;
    }

    const userRequest = req.body as userOTPRequest;
    if (!userRequest) {
      throw errors.INVALID_OTP;
    }
    //TO DO: Throw error if otp!=6 digits, before even reading databaseOTP
    const dbClient: MongoClient = await getDbClient();
    const databaseOTP = await dbClient
      .db("links")
      .collection("otp")
      .findOne({ otp: userRequest.otp });

    if (!databaseOTP) {
      throw errors.INVALID_OTP; //if otp by user doesn't match any otp in database
    }
    if (databaseOTP.email === user.email) {
      if (databaseOTP.expiresAt < new Date().getTime()) {
        throw errors.OTP_EXPIRED;
      }
      //TO DO: Delete OTP document when otp has expired
      await dbClient
        .db("links")
        .collection("otp")
        .deleteOne({ _id: databaseOTP._id });
      return res.status(200).json({
        success: true,
      });
    } else {
      throw errors.INVALID_OTP; //when a user enters an otp that another user got
      //(when email in token doesn't match the email in database but the otp in request and the database matches)
    }
  } catch (err) {
    next(err);
  }
};

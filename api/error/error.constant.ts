export const errors = {
  BAD_REQUEST: {
    httpStatus: 400,
    message: "Bad Request.",
  },
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    message: "Internal Server Error.",
  },
  UNAUTHORIZED: {
    httpStatus: 401,
    message: "Wrong Password",
  },
  NOT_FOUND: {
    httpStatus: 404,
    message: "Resource Not Found.",
  },
  USER_NOT_FOUND: {
    httpStatus: 401,
    message: "User not registered. Please sign up",
  },
  MONGODB_CONNECT_ERROR: {
    httpStatus: 500,
    message: "Could Not Connect to MongoDB.",
  },
  MONGODB_QUERY_ERROR: {
    httpStatus: 500,
    message: "Error Executing MongoDB Query",
  },
  JWT_ERROR: {
    httpStatus: 403,
    message: "JWT Token Not Found.",
  },
  DUPLICATE_USER: {
    httpStatus: 400,
    message: "Email ID Already Registered. Please Login.",
  },
  DUPLICATE_USERNAME: {
    httpStatus: 400,
    message:
      "This username is not available. Please choose some other username.",
  },
};

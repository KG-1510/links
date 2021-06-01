import { useEffect, useContext } from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DashboardComponent from "../components/dashboard/dashboard";
import SidebarContextProvider from "../store/sidebarContext";
import { AuthContext } from "../store/authContext";
import { getLinks } from "../utils/api";

interface DashboardPageProps {
  _resLinks: [];
}

export default function Dashboard({ _resLinks }) {
  const router = useRouter();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("isAuth", "true");
    if (!isAuth) {
      toast.error("❌ Access Denied, log in to continue!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      localStorage.removeItem("isAuth");
      router.replace("/login");
    }
  });

  return (
    <SidebarContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DashboardComponent _resLinks={_resLinks.result} totalViews={_resLinks.viewCount} />
    </SidebarContextProvider>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<DashboardPageProps>> {
  try {
    const { authToken } = parseCookies(ctx);
    const _resLinks = await getLinks(authToken);

    return {
      props: {
        _resLinks,
      },
    };
  } catch (err) {
    return {
      props: {
        _resLinks: [],
      },
    };
  }
}

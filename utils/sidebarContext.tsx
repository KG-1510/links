import React, { useState } from "react";

export interface activeLinkProps {
  title: string;
  url: string;
  image: string;
  status: boolean;
  views: number;
  clicks: number;
}

export const SidebarContext = React.createContext({
  activeLink: {
    title: "",
    url: "",
    image: "",
    status: false,
    views: 0,
    clicks: 0,
  },
  setActiveLink: ({}: activeLinkProps) => {},
});

const SidebarContextProvider: React.FC = (props): JSX.Element => {
  const [activeLink, setActiveLink] = useState<activeLinkProps>({
    title: "",
    url: "",
    image: "",
    status: false,
    views: 0,
    clicks: 0,
  });

  return (
    <SidebarContext.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
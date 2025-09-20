import React from "react";

type SocialIconProps = {
  type: "facebook" | "instagram" | "linkedin" | "tiktok";
};

const icons: Record<SocialIconProps["type"], { light: string; dark: string }> =
  {
    facebook: {
      light: "/fb-light.png",
      dark: "/fb-dark.png",
    },
    instagram: {
      light: "/ig-light.png",
      dark: "/ig-dark.png",
    },
    linkedin: {
      light: "/linkedin-light.png",
      dark: "/linkedin-dark.png",
    },
    tiktok: {
      light: "/tiktok-light.png",
      dark: "/tiktok-dark.png",
    },
  };

export const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  return (
    <>
      <img
        className="dark:hidden w-10 h-10"
        src={icons[type].light}
        alt={`${type} icon`}
      />
      <img
        className="hidden dark:block w-10 h-10"
        src={icons[type].dark}
        alt={`${type} icon dark`}
      />
    </>
  );
};

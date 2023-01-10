import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} itemClass={itemClass} {...link} />;
      })}
    </ul>
  );
};

export default SocialLinks;

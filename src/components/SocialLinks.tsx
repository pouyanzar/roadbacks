import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
interface SocialLinksProps {
  parentClass: string;
  itemClass: string;
}
const SocialLinks = ({ parentClass, itemClass }: SocialLinksProps) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} itemClass={itemClass} {...link} />;
      })}
    </ul>
  );
};

export default SocialLinks;

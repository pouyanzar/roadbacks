interface SocialLinkProps {
  href: string;
  icon: string;
  itemClass?: string;
}
const SocialLink = ({ href, icon, itemClass }: SocialLinkProps) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;

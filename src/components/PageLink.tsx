interface PageLinkProps {
  itemClass?: string;
  href: string;
  text: string;
}
const PageLink = ({ itemClass, href, text }: PageLinkProps) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;

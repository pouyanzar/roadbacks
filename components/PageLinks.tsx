import { pageLinks } from "../data";
import PageLink from "./PageLink";
interface PageLinksProps {
  parentClass: string;
  itemClass: string;
}
const PageLinks = ({ parentClass, itemClass }: PageLinksProps) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => (
         <PageLink key={link.id} itemClass={itemClass} {...link} />
      ))}
    </ul>
  );
};

export default PageLinks;

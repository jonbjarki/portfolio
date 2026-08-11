import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div aria-hidden="true" role="presentation" className="vertical-line line-short"></div>
      <a href="https://github.com/jonbjarki" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jon-bjarki-gislason/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <div aria-hidden="true" role="presentation" className="vertical-line line-long"></div>
    </aside>
  );
}

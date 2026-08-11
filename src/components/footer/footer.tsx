import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Jón Bjarki Gíslason. All rights reserved.
      </p>
      <a
        className="footer-github"
        href="https://github.com/jonbjarki"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jon-bjarki-gislason/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-linkedin"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

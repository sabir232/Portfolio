import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>Mahmdasabir</span>
        <span>Dharwad</span>
      </a>
      <div>
        <p>
          This Website was made with
          <span>❤️</span> by Sabir
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mahmdasabir-dharwad-07b956284/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/sabir232/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}

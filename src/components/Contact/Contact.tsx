import { Container } from "./styles";
// import emailIcon from "../../assets/email-icon.svg";
// import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:mahmdasabirdharwad@gmail.com">
            mahmdasabirdharwad@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+917019421821">(+91) 7019421821</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}

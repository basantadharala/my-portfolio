import { Container, Row, Col } from "react-bootstrap";
import { MailchimForm } from "./MailchimForm";
import logo from "../assets/img/footer-bg.png";
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} >
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end pt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/basanta-dharala/" target="_blank"><img src={NavIcon1} alt="Social Icon 1" /></a>
              <a href="https://www.instagram.com/itsbasantadc/" target="_blank"><img src={NavIcon3} alt="Social Icon 2" /></a>
              <a href="https://www.facebook.com/basanta.dc.756" target="_blank"><img src={NavIcon2} alt="Social Icon 3" /></a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
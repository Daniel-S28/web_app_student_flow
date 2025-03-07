import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';


export const Contact = () => {

  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem('file', selectedFile)
    console.log(selectedFile)
    setButtonText("Sending...");
    setButtonText("Send");
    navigate('/Actions');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Sube tu historia academica para acceder a todas las interacciones!</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={13} className="px-1">
                      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

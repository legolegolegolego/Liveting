import { useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import videoSrc from "@/assets/trailer.mp4";
import logo from "@/assets/logo.png";
import image1 from "@/assets/writer-character.webp";
import image2 from "@/assets/escenarios.webp";

export default function GamePresentation() {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-4">
        <img src={logo} alt="Game Logo" className="w-25" />
        <Button variant="light">Jugar Demo</Button>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold">Escribe tu Vida</h1>
        <p className="fs-5">Gestiona tu tiempo, crea tu obra magna y encuentra tu propio final.</p>
      </section>
      
      {/* Video Trailer */}
      <section className="d-flex justify-content-center py-4">
        <video src={videoSrc} controls className="w-75 rounded shadow-lg" autoPlay muted loop/>
      </section>
      
      {/* Game Features */}
      <Row className="text-center py-5">
        <Col md={6} className="p-3">
          <div className="p-4 bg-secondary rounded shadow-lg">
            <h2>Decisiones que Importan</h2>
            <p>Cada elección afecta tu destino y el equilibrio de tu vida.</p>
          </div>
        </Col>
        <Col md={6} className="p-3">
          <div className="p-4 bg-secondary rounded shadow-lg">
            <h2>Un Estilo Único</h2>
            <p>Dibujos en blanco y negro que reflejan la profundidad del juego.</p>
          </div>
        </Col>
      </Row>
      
      {/* Image Carousel */}
      <section className="py-5 text-center">
        <h2 className="fw-bold">Explora tu Mundo</h2>
        <Carousel className="w-50 mx-auto mt-4">
          <Carousel.Item>
            <img src={image1} alt="Screenshot 1" className="d-block w-100 rounded" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Screenshot 2" className="d-block w-100 rounded" />
          </Carousel.Item>
        </Carousel>
      </section>
    </Container>
  );
}

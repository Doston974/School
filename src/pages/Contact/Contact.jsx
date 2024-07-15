import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import LondonLocationImg from "../../utils/images/London-location.jpg";
import ManchesterLocationImg from "../../utils/images/Manchester-location.jpg";
import LiverpoolLocationImg from "../../utils/images/Liverpool-location.jpg";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Biz bilan aloqa</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            pariatur qui quos aspernatur, voluptatem autem possimus esse quo
            consequatur omnis, soluta consectetur ullam ipsum cum!
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Ismingiz</Form.Label>
              <Form.Control placeholder="Ismingizni kiriting..." />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sharifingiz</Form.Label>
              <Form.Control placeholder="Sharifingizni kiriting..." />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email manzilingizni kiriting..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Manzil</Form.Label>
            <Form.Control placeholder="Manzilingizni kiriting..." />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Hudud</Form.Label>
              <Form.Select defaultValue="London">
                <option>Nurafshon</option>
                <option>Chirchiq</option>
                <option>Qibray</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Tel raqam</Form.Label>
              <Form.Control placeholder="Tel raqamingizmi kiriting..." />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Murojaat mazmuni</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary btn-lg" type="submit">
            Yuborish
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Biz joylashgan hududlar</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LiverpoolLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Chirchiq</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={ManchesterLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Nurafshon</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LiverpoolLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Qibray</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

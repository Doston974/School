import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center mb-5">Tez-tez so'raladigan savollar</h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          numquam rem expedita similique necessitatibus dolore magnam natus sit
          ipsa, quae neque accusantium placeat laudantium mollitia,
          reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis
          repudiandae eos! Quasi unde veritatis labore quibusdam.
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Birinchi savol ?</Accordion.Header>
            <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo
              ducimus quod qui eius nobis quam temporibus similique fugit?
              Molestias, illo, maxime nulla aliquid ut pariatur corrupti
              aspernatur dolor assumenda quos officia eos?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Ikkinchi savol ?</Accordion.Header>
            <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo
              ducimus quod qui eius nobis quam temporibus similique fugit?
              Molestias, illo, maxime nulla aliquid ut pariatur corrupti
              aspernatur dolor assumenda quos officia eos?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Uchinchi savol ?</Accordion.Header>
            <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo
              ducimus quod qui eius nobis quam temporibus similique fugit?
              Molestias, illo, maxime nulla aliquid ut pariatur corrupti
              aspernatur dolor assumenda quos officia eos?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>To'rtinchi savol ?</Accordion.Header>
            <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo
              ducimus quod qui eius nobis quam temporibus similique fugit?
              Molestias, illo, maxime nulla aliquid ut pariatur corrupti
              aspernatur dolor assumenda quos officia eos?
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
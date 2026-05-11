import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';




const Home: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: '100vh' }}>
      <Container>

        
        <Row className="align-items-center" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
          <Col xs={12}>
            <p style={{ color: 'rgb(255,255,255)', letterSpacing: '3px', fontSize: '0.85rem' }}>
              BSIT STUDENT · UNIVERSITY OF BAGUIO
            </p>
            <h1 style={{ color: 'rgb(255,255,255)',fontWeight: 'bold', fontSize: '3rem', lineHeight: '1.2' }}>
              Hi, I'm <br />
              <span style={{ color: 'white' }}>Bumatay Fernando</span>
            </h1>
            </Col>
            <Col md={7}>
            <p style={{ fontSize: '1.1rem', marginTop: '20px', color: 'rgb(255,255,255)', lineHeight: '1.8' }}>
              I am a 1st year BSIT student at the University of Baguio.
              I am interested in coding and learning how computer systems work.
              This is my personal portfolio where I show my school projects and skills.
            </p>
            </Col>
          
        </Row>

    
      </Container>
    
    </section>
  );
};

export default Home;
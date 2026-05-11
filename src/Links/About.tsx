import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';


const About: React.FC = () => {

  

  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: '100vh' }}>
      <Container>


        <Row className="mb-5 mt-5">
          <Col>
            <h1 className="fw-bold display-5">
               ABOUT <span style={{ color: 'rgb(255, 255, 255)' }}>ME</span>
            </h1>
            
          </Col>
        </Row>


        <Row className="mb-5">
          <Col>
            <p className="text-secondary fs-5 lh-lg">
               I'm a BSIT student still in the middle of figuring it all out, exploring different tracks, 
              trying new things, and slowly piecing together what I actually want to pursue for the rest of my life. 
              Whether it's cybersecurity, web development, or something I haven't discovered yet, 
              I'm keeping my options open and making the most out of every project, certificate, and late night debugging session along the way.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
  <Col xs={12}>
    <h2 className="fw-bold mb-4"> SKILLS</h2>
  </Col>

  
  <Col md={6} className="mb-4">
    <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">HARD SKILLS</h5>
    <div className="border border-secondary rounded p-4 bg-black h-100">
      {[
        {
          name: "Java OOP Foundations",
         
        },
        {
          name: "C# Razor Pages",
         
        },
        {
          name: "React & TypeScript",
         
        },
        {
          name: "MySQL & MongoDB",
      
        },
        {
          name: "Networking (CCNA)",
         
        },
        {
          name: "Bootstrap & UI Design",
       
        },
        {
          name: "Basic Cybersecurity Knowledge ",
         
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-3"
          style={{
            gap: '12px',
            padding: '6px 8px',
            borderRadius: '6px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <img
           
            alt={skill.name}
            style={{
              width: '28px',
              height: '28px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <span className="text-white" style={{ fontSize: '0.95rem' }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </Col>

  {/* Soft Skills Table */}
  <Col md={6} className="mb-4">
    <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">SOFT SKILLS</h5>
    <div className="border border-secondary rounded p-4 bg-black h-100">
      {[
        {
          name: "Problem Solving",
    
        },
        {
          name: "Communication",
      
        },
        {
          name: "Team Collaboration",
       
        },
        {
          name: "Adaptability",
       
        },
        {
          name: "Time Management",
     
        },
        {
          name: "Critical Thinking",
      
        },
        {
          name: "Attention to Detail",
       
        },
        {
          name: "AI Proficiency (Claude, Chat GPT, Gemini , Perplexity )",
        
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-3"
          style={{
            gap: '12px',
            padding: '6px 8px',
            borderRadius: '6px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <img
         
            alt={skill.name}
            style={{
              width: '28px',
              height: '28px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'invert(0)',
            }}
          />
          <span className="text-white" style={{ fontSize: '0.95rem' }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </Col>
</Row>
{/* Tools & Technologies Table */}
<Col xs={12} className="mt-5">
  <h2 className="fw-bold mb-4">TOOLS & TECHNOLOGIES</h2>
</Col>

<Col md={6} className="mb-4">
  <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">DEVELOPMENT TOOLS</h5>
  <div className="border border-secondary rounded p-4 bg-black h-100">
    {[
      {
        name: "Visual Studio Code",
       
      },
      {
        name: "Visual Studio",
     
      },
      {
        name: "IntelliJ IDEA",
       
      },
      {
        name: "Cisco Packet Tracer",
     
      },
      {
        name: "MySQL Workbench",
        
      },
    ].map((tool, index) => (
      <div
        key={index}
        className="d-flex align-items-center mb-3"
        style={{
          gap: '12px',
          padding: '6px 8px',
          borderRadius: '6px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <img
         
          alt={tool.name}
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />
        <span className="text-white" style={{ fontSize: '0.95rem' }}>
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</Col>

<Col md={6} className="mb-4">
  <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">DESIGN & FRAMEWORKS</h5>
  <div className="border border-secondary rounded p-4 bg-black h-100">
    {[
      {
        name: "Adobe Photoshop",
        
      },
      {
        name: "Razor Pages (ASP.NET)",
        
      },
      {
        name: "React",
        
      },
      {
        name: "Bootstrap",
        
      },
      {
        name: "Git & GitHub",
        
      },
    ].map((tool, index) => (
      <div
        key={index}
        className="d-flex align-items-center mb-3"
        style={{
          gap: '12px',
          padding: '6px 8px',
          borderRadius: '6px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <img
          
          alt={tool.name}
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
            flexShrink: 0,
            filter: tool.name === 'Git & GitHub' ? 'invert(1)' : 'none',
          }}
        />
        <span className="text-white" style={{ fontSize: '0.95rem' }}>
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</Col>

      </Container>
    </section>
  );
};

export default About;
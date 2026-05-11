import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

const PURPLE = 'rgb(255,255,255)';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <style>{`
        .nav-logo {
          font-weight: 800;
          font-size: 1.2rem;
          color: white !important;
          text-decoration: none;
          letter-spacing: 1px;
          transition: color 0.2s;
        }
        .nav-logo:hover {
          color: ${PURPLE} !important;
        }
        .nav-custom-link {
          color: #aaa !important;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        
        
        .hire-btn {
            color: #aaa !important;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            padding: 6px 12px;
            border-radius: 6px;
            transition: color 0.2s, background 0.2s;
        }
       
       `
       }</style>

      <Navbar
        expand="md"
        expanded={expanded}
        onToggle={setExpanded}
        fixed="top"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #222',
          padding: '14px 0',
        }}
      >
        <Container>
         
          <Navbar.Brand as={Link} to="/" className="nav-logo">
            Bumatay F.
          </Navbar.Brand>

          
          <Navbar.Toggle
            aria-controls="main-nav"
            
          />

          
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center gap-1">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-custom-link"
                
                end
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="nav-custom-link"
                
              >
                About
              </Nav.Link>          
              <NavLink
                to="/contact"
                className="hire-btn ms-2"
                
              >
                Contact Me
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
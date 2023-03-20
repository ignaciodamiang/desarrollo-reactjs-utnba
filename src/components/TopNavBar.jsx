import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAuthContext } from '../context/AuthContext';

function TopNavBar() {
  const { login, handleLogout, user } = useAuthContext();

  return (
    <>
      <Navbar className='px-5' bg='light' expand='lg'>
        <Navbar.Brand as={Link} to='/'>
          Productos App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {login && (
              <>
                <Nav.Link as={Link} to='/'>
                  Inicio
                </Nav.Link>
              </>
            )}
            {!login && (
              <>
                <Nav.Link as={Link} to='/login'>
                  Ingresar
                </Nav.Link>
                <Nav.Link as={Link} to='/registry'>
                  Registrarse
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {login && (
          <NavDropdown title={user.email} id='basic-nav-dropdown'>
            <Nav.Link onClick={() => handleLogout()}>Salir</Nav.Link>
          </NavDropdown>
        )}
      </Navbar>
    </>
  );
}

export default TopNavBar;

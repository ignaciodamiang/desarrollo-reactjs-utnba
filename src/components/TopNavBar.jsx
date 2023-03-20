import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAuthContext } from '../context/AuthContext';

function TopNavBar() {
  const { login, handleLogout, user } = useAuthContext();

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand as={Link} to='/'>
          Entrega Final
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Inicio
            </Nav.Link>
            {!login && (
              <>
                <Nav.Link as={Link} to='/registry'>
                  Registrarse
                </Nav.Link>
                <Nav.Link as={Link} to='/login'>
                  Ingresar
                </Nav.Link>
              </>
            )}

            {login && (
              <>
                <NavDropdown title='Productos' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to='/producto/alta'>
                    Alta
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => handleLogout()}>Salir</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {login && <div>Hola {user.nombre}</div>}
      </Navbar>
    </>
  );
}

export default TopNavBar;

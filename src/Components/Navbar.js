
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Nav className="me-auto">
            <Nav.Link href="post">Post</Nav.Link>
            <Nav.Link href="list">To-do list</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;
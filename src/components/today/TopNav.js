
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../styles/topnav.module.css';

const TopNav = () => {

  const d = new Date();
  const d1 = d.toDateString();


  return (
    <Navbar bg="light" expand="lg" className='shadow-sm'>
      <Container >
        <Navbar.Brand className={styles.decorationLogo}>
          <Link className={styles.decorationLogo} to='/'>
            <img src="../habit.png" alt="" className='img-fluid rounded-circle' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Item as="li">
              <div className={styles.navLeftElem}>
                <Link className={styles.decoration} to='/'>
                <button className='btn btn-outline-primary' >Home</button> </Link>
              </div>
            </Nav.Item>
            <Nav.Item as="li">
              <div className={styles.navLeftElem}>
                <Link className={styles.decoration} to='/weekly'> 
                <button className='btn btn-outline-primary ' >Weekly</button></Link>
              </div>
            </Nav.Item>
            <Nav.Item as="li">
              <div className={styles.navRightElem}>
                {`${d1}`}
              </div>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
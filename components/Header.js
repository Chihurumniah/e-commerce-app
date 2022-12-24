import Link from "next/link";
import styles from '../styles/Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
//import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const  Header = ({color})=>{
  let router = useRouter();
    return (
        <header className="header_section">
        <div className="container-fluid">
        <Navbar  expand="lg">
        <Container fluid>
        <a className="navbar-brand" href="#index">
              <span id="logo" className="home">
                Timups
              </span>
            </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link href="/" legacyBehavior>
                  <span className={styles.navLink}>
                    <a className={router.pathname == '/' ? styles.active : styles.offactive}> HOME </a>
                  </span>
                </Link>
                <Link href="/About" legacyBehavior>
                  <span className={styles.navLink}>
                    <a className={router.pathname == '/About' ? styles.active : styles.offactive}> ABOUT US </a>
                  </span>
                </Link>
                <Link href="/Oder" legacyBehavior>
                <span className={styles.navLink}>
                    <a className={router.pathname == '/Oder' ? styles.active : styles.offactive}> ODER </a>
                </span>
                </Link>
                <Link href="/Auth" legacyBehavior>
                  <span className={styles.navLink}>
                    <a className={router.pathname == '/Auth' ? styles.active : styles.offactive}> LOGIN </a>
                  </span>
                </Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button style={{color: "white", background:color, boder:color}} type="button" className="btn">Search</button>
          </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
      </header>
    )
}
export default Header;
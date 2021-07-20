import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" id="Navbar" className="NavbarRJ">
            <Navbar.Brand href="#home" id="name">Rob Jeison</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#welcome-section" id="navButton">- Welcome Section -</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#projectsstand" id="navbutton"> See Stand </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Javascript Calculator</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Drum Machine</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Random Quote Machine</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Markdown Previewer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Landing Page</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Survey Page</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Technical Documentation Page</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#Contact_Info" >Make a Request</NavDropdown.Item>
                        <Nav.Link href="https://codepen.io/collection/MggGVy" target="_blank" rel="noopener noreferrer">Go to Collection in Codepen.io</Nav.Link>
                    </NavDropdown>
                    <Nav.Link href="#Contact_Info" id="navButton">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
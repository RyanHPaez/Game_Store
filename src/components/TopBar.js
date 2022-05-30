import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Card
            // style={{
            //   width: "100%",
            //   backgroundImage:
            //     "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/1200px-NES-Console-Set.jpg)",
            //   height: "100px",
            //   backgroundRepeat: "no-repeat",
            //   color: "red",
            //   backgroundPosition: "center",
            //   marginTop: "0px",
            // }}
            >       
            <Card.Title>              
              {/* <Card.Subtitle className="mb-2 text-muted">Delivery • Pickup</Card.Subtitle> */}
              <Nav.Link></Nav.Link>
            </Card.Title>
          </Card>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanimage from "../assets/image/superhero/superhero/antman.jpg"
import avengerimage from "../assets/image/superhero/superhero/avenger.jpg"
import batmanimage from "../assets/image/superhero/superhero/batman.jpg"
import robinhoodimage from "../assets/image/superhero/superhero/robinhood.jpg"
import spidermanimage from "../assets/image/superhero/superhero/spiderman.jpg"
import supermanimage from "../assets/image/superhero/superhero/superman.jpg"
const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={antmanimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">ANTMAN</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                    <Col md={4}  className="movieWrapper">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={avengerimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">AVENGER</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={batmanimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">THE BATMAN</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={robinhoodimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">ROBINHOOD</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={spidermanimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">SPIDERMAN</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" bg-dark text-white movieImage">
        <Image src={supermanimage} alt="Dune Movies" className="image" />
        <div className="p-2 m-2">
          <Card.Title className="text-center">SUPERMAN HERO</Card.Title>
          <Card.Text className="text-left">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
          </div>
      </Card>
                    </Col>
                </Row>
            </Container>
      </div>
    )
}

export default Superhero
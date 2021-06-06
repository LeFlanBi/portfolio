import "./_Home.scss"

import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
  return (
    <>
      <Container className="home">
        <Row className="content">
          <Col md={{ span: 7 }}>
            <img src="https://via.placeholder.com/640x780" alt="" />
          </Col>
          <Col className="home-info" md={{ span: 5 }}>
            <div className="home-text">
              <h1 className="home-display">Makyma</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                at egestas faucibus sollicitudin egestas a, tellus ut facilisi.
                Ipsum dictum cursus eleifend ut tincidunt accumsan ac justo.
              </p>
            </div>
            <div className="home-interaction">
              <Link to="/project/makyma" className="red btn">
                En savoir plus
              </Link>
              <div className="line"></div>
            </div>
          </Col>
        </Row>
        <Row className="slider">
          <Col className="line-container" md={{ span: 4 }}>
            01
            <div className="line"></div>
            03
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

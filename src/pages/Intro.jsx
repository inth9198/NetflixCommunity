import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


class Intro extends Component {
    render() {
        return(
            <Container fluid>
            <Row>
              <Col className="item"><h1>netflix community</h1> </Col>
              <Col className="item"></Col>
              <Col className="item">
                  <Link to='/login'>login</Link><br />
                  <Link to='/signup'>signup</Link>
              </Col>
            </Row>
          </Container>
        );
    }
}

export default Intro;
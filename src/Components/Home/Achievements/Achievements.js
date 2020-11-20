import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Achievements.css';
import happy from '../../../Images/happy.png';
import achiever from '../../../Images/achiever.png';
import trophy from '../../../Images/trophy.png';
import rocket from '../../../Images/rocket.png';


const Achievements = () => {
    return (
        <div className="section">
            <Container className="my-2">
                <Row>
                    <Col md={5} className="mt-3">
                        <h2 className="font-weight-bold pt-5">Our Achievements</h2>
                        <p className="mt-3 text-secondary">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illo, officiis ipsa minus atque fugiat!
                        </p>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col md={6}>
                                <div className="achieveCardOne my-3">
                                    <Row className="achieveCardInner">
                                        <Col className="text-right">
                                            <img src={happy} alt="" className="img-fluid h-75 mt-1" />
                                        </Col>
                                        <Col>
                                            <h3 className="font-weight-bold">800+</h3>
                                            <span>Happy Clients</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="achieveCardTwo my-3">
                                    <Row className="achieveCardInner">
                                        <Col className="text-right">
                                            <img src={trophy} alt="" className="img-fluid h-75 mt-1" />
                                        </Col>
                                        <Col>
                                            <h3 className="font-weight-bold">240+</h3>
                                            <span>Projects Completed</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="achieveCardTwo my-3">
                                    <Row className="achieveCardInner">
                                        <Col className="text-right">
                                            <img src={achiever} alt="" className="img-fluid h-75 mt-1" />
                                        </Col>
                                        <Col>
                                            <h3 className="font-weight-bold">35+</h3>
                                            <span>Crazy Minds</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="achieveCardThree my-3">
                                    <Row className="achieveCardInner">
                                        <Col className="text-right">
                                            <img src={rocket} alt="" className="img-fluid h-75 mt-1" />
                                        </Col>
                                        <Col>
                                            <h3 className="font-weight-bold">75+</h3>
                                            <span>Running Projects</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievements;
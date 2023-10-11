import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import SocialLinks from './SocialLinks';

const FooterCard = () => {
  return (
    <Card className="section-lg bg-gradient-dark shadow-lg border-0 p-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={'/img/icons/common/SolanaAI.png'}
                style={{ width: '150px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Solana Education</h2>
              <SocialLinks />
              <p className="text-white mt-3">
                Copyright by Solana Education © 2023
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default FooterCard;

import React from 'react';
import KeyFeaturesCard from '../components/KeyFeaturesCard';
import { KeyFeatureInfo } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';

const Education = () => {
  return (
    KeyFeatureInfo && (
      <section className="section pb-0 bg-gradient-info my-5">
        <Container>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-books text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-white">Key Features</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {KeyFeatureInfo.map((info) => {
              return (
                <Col className="order-lg-1" lg="6" key={info.title}>
                  <KeyFeaturesCard {...info} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Education;

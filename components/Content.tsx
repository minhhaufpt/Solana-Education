import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import { contentSrc } from '../contentPosts';

const Content = () => {
  return (
    contentSrc && (
      <Container className="text-left my-3 section section-lg">
        {contentSrc.data.map((section, index) => {
          return (
            <Row className="my-3" key={index}>
              <Col lg="12" className="order-1 order-lg-2">
                <Fade right duration={1500}>
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="mb-2"> {section.description} </div>
                  <div className="h5">Link tham khảo: </div>
                  {section.links.map((link, i) => {
                    return (
                      <Fragment key={i}>
                        <a target="_blank" href={link.link} rel="noreferrer">
                          {link.name}
                        </a>
                      </Fragment>
                    );
                  })}
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Content;

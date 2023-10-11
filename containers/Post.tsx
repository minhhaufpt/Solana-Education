import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const Content = dynamic(() => import('../components/Content'));
import { contentSrc } from '../contentPosts';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';
const Post = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });
  return (
    contentSrc && (
      <main>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-100">
            <div className="shape shape-style-1 bg-gradient-dark">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <h1 className="display-3 text-white">{contentSrc.title}</h1>
                  <p className="lead text-white">{contentSrc.description}</p>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <Content />
      </main>
    )
  );
};

export default Post;

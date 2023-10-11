import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const Content = dynamic(() => import('../components/Content'));
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
                <h1 className="display-3 text-white">
                  Tôi là ai, tôi đang làm gì?
                </h1>
                <p className="lead text-white">
                  Xin chào các bạn, tôi là sinh viên K17 trường FPT Polytecnic
                  chuyên ngành ứng dụng phần mềm. Cũng là thành viên của nhóm đã
                  tham gia 2 trong số các cuộc thi Hackathon của SuperTeam tổ
                  chức. Vậy tôi đang làm gì? Có nhiều bạn cũng thắc mắc với câu
                  hỏi này khi tìm tới đây. Mong muốn của các bạn chắc hẳn là tìm
                  được một định hướng và hướng đi cho dự án BlockChain sắp tới.
                  Tôi đoán thế! Nếu chúng ta đã chung tiếng nói thì sao không
                  cùng đi vào phân tích và xây dựng hướng đi và ý tưởng cho dự
                  án của các bạn. Tôi chỉ dựa trên những kinh nghiệm đã đúc kết
                  được qua quá trình học tập không dài vì thế sẽ không tránh
                  khỏi thiếu sót và sai lầm. Mọi góp ý của các bạn đều là những
                  kiến thức quý giá để cho mọi người cùng học tập.
                </p>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <Content />
    </main>
  );
};

export default Post;

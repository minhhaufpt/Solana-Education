import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
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
import Swal from 'sweetalert2';
const Date20_10 = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });
  const form = useRef<HTMLFormElement>(null);
  const [send, setSend] = useState(false); // typeScript

  const sendRequestPromt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSend(true);
    const inputElement = form.current?.querySelector(
      'textarea[name="your_request"]'
    ) as HTMLTextAreaElement;
    const pass = inputElement?.value;
    console.log(pass);
    if (pass === '1234') {
      await Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Bạn là người đặc biệt !',
      });
      await Swal.fire({
        title: 'Lời chúc tới',
        text: 'Lời chúc',
        width: 600,
        padding: '3em',
        color: '#000000',
        background: '#fff url()',
        backdrop: ` rgba(252, 93, 241, 0.4) url("/gif/meo1.gif") left top no-repeat `,
        showConfirmButton: false,
        timer: 30000,
      });
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Mật mã của bạn không chính xác',
      });
    }
    setSend(false);
  };
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-150">
          <div className="shape shape-style-1 bg-gradient-pink">
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
          <form ref={form} onSubmit={sendRequestPromt}>
            <Container className="py-lg-md d-flex">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">
                        Hộp thoại này là giành riêng cho những người đặc biệt -
                        những người đáng quý nhất trong cuộc đời của tôi.
                      </h4>
                      <FormGroup className="mb-4 mt-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="your_request"
                          placeholder=" Hãy nhập mật mã để biết được những lời chúc thầm kín !"
                          rows="2"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block // props
                          className={classNames(
                            `btn-round ${send ? 'disabled' : ''}`,
                            {}
                          )}
                          color="danger"
                          size="lg"
                          type="submit"
                        >
                          {send ? 'Đang xác thực' : 'Gửi'}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </form>
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
    </main>
  );
};

export default Date20_10;

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
const Promt = () => {
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
    console.log(inputElement?.value);
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const options = {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: inputElement?.value,
          },
        ],
        temperature: 0.7,
      }),
    };
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    } else {
      const data = await response.json();
      console.log(data.choices[0].message.content);
    }
    setSend(false);
  };
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
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
                        What do you want your avatar to look like?
                      </h4>
                      <FormGroup className="mb-4 mt-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="your_request"
                          placeholder="Your request ..."
                          rows="4"
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
                          color="default"
                          size="lg"
                          type="submit"
                        >
                          {send ? 'Processing' : 'Send'}
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

export default Promt;

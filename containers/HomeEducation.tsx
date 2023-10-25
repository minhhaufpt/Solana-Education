import React, { Fragment, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Container, Row, Col, Fade } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PublicKey } from '@solana/web3.js';
const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);
const HomeEducation = () => {
  const { connection } = useConnection();
  const { publicKey, signMessage } = useWallet();
  const [conectWallet, setConectWallet] = useState(false);
  useEffect(() => {
    setConectWallet(publicKey != undefined ? true : false);
  }, [publicKey, conectWallet]);
  return (
    <>
      <main>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-150">
            <div className="shape shape-style-1 bg-gradient-blue">
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
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Hello, I am Solana Education.
                    </h1>
                    <p className="lead text-white">
                      {`I will help introduce you to the world of new technology.
                    Let's start connecting to your wallet to be able to use
                    other functions.`}
                    </p>
                    <div className="btn-wrapper my-4">
                      {conectWallet ? (
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href={'/education/student'}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-play" />
                          </span>
                          <span className="btn-inner--text">Get Starting</span>
                        </Button>
                      ) : (
                        <WalletMultiButtonDynamic />
                      )}
                    </div>
                  </Col>
                  <Col lg="6">
                    <DisplayLottie animationPath="/lottie/educationVerify.json" />
                  </Col>
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
      </main>
    </>
  );
};

export default HomeEducation;

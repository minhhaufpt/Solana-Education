import React, { useState } from 'react';
import axios from 'axios';
import { signAndConfirmTransactionFe } from '../services/ntf/utilityfunc';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
//const xApiKey = '3rqYpDYWmSPMnc5r';
const xApiKey = 't4K9FOqp7zB6edUu';
const CreateNFT = () => {
  const { publicKey, signMessage } = useWallet();
  const [studentID, setStudentID] = useState();
  const [studentName, setStudentName] = useState();
  const [mark, setMark] = useState('Grade F');
  const gradeOptions = [
    'Grade F',
    'Grade D',
    'Grade C',
    'Grade B',
    'Grade A',
    'Grade A+',
  ];
  const [file, setfile] = useState();
  const [displayPic, setDisplayPic] = useState(
    '/img/icons/common/nguyenminhhau.png'
  );
  const [sts, setSts] = useState(false);
  const [network, setnetwork] = useState('devnet');
  const [publicKeyInput, setPublicKey] = useState(
    publicKey == undefined
      ? 'HmWXFySFf9nN5yCYaatZZceJTH4Wd3FdwvhBkiXBHVea'
      : publicKey?.toString()
  );
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState('SEM');
  const [desc, setDesc] = useState('Checking');
  const [attr, setAttr] = useState(
    JSON.stringify([
      { studentID: 'PS24488', studentName: 'Nguyễn Minh Hậu', mark: 'A' },
    ])
  );
  const [category, setCategory] = useState('Other');
  const [extUrl, setExtUrl] = useState();
  const [maxSup, setMaxSup] = useState(0);
  const [roy, setRoy] = useState(99);

  const [minted, setMinted] = useState();
  const [saveMinted, setSaveMinted] = useState();
  const [errorRoy, setErrorRoy] = useState();

  const [status, setStatus] = useState('Awaiting Upload');
  const [statusBtn, setStatusBtn] = useState(false);
  const [dispResponse, setDispResp] = useState();
  const [connStatus, setConnStatus] = useState(true);

  const callback = (signature, result) => {
    console.log('Signature ', signature);
    console.log('result ', result);
    if (signature.err === null) {
      setMinted(saveMinted);
      setStatus('Success: Successfully Signed and Minted.');
    }
  };

  const mintNow = (e) => {
    e.preventDefault();
    setStatusBtn(true);
    if (publicKey == undefined) {
      alert('Please select wallet');
      setStatusBtn(false);
      return;
    } else if (!mark || !studentID || !file) {
      alert('Please complete all information');
      setStatusBtn(false);
      return;
    } else if (publicKey?.toString() != publicKeyInput) {
      setPublicKey(publicKey?.toString());
    }
    let formData = new FormData();
    formData.append('network', network);
    formData.append('wallet', publicKeyInput);
    formData.append('name', mark);
    formData.append('symbol', symbol);
    formData.append('description', sts ? 'Finish' : 'Checking');
    formData.append(
      'attributes',
      JSON.stringify([
        {
          studentID: studentID,
          studentName: studentName ? studentName : 'Incognito',
          category: category,
          mark: mark,
          publicKey: publicKeyInput,
        },
      ])
    );
    formData.append('external_url', extUrl);
    formData.append('max_supply', maxSup);
    formData.append('royalty', roy);
    formData.append('file', file);
    // formData.append('receiver', publicKeyInput);
    // formData.append(
    //   'service_charge',
    //   JSON.stringify({
    //     receiver: publicKeyInput,
    //     amount: 0.005,
    //   })
    // );
    axios({
      url: 'https://api.shyft.to/sol/v1/nft/create_detach',
      method: 'POST',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': xApiKey,
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      },
      data: formData,
    })
      .then(async (res) => {
        console.log(res);
        if (res.data.success === true) {
          setStatus(
            'Success: Transaction Created. Signing Transactions. Please Wait.'
          );
          const transaction = res.data.result.encoded_transaction;
          setSaveMinted(res.data.result.mint);
          const ret_result = await signAndConfirmTransactionFe(
            network,
            transaction,
            callback
          );
          setDispResp(res.data);
          setStatusBtn(false);
        }
      })
      .catch((err) => {
        console.warn(err);
        setStatus('Unsuccessful');
        setStatusBtn(false);
      });
  };

  return (
    <div className="gradient-background">
      <div className="container p-5">
        {connStatus && (
          <div
            className="form-container border border-primary rounded py-3 px-5"
            style={{ backgroundColor: '#FFFFFFEE' }}
          >
            <h3 className="pt-4">Upload Exam</h3>
            <p></p>
            <form>
              <div className="img-container text-center mt-5">
                <div
                  className="uploaded-img"
                  style={{
                    height: '200px',
                    width: '200px',
                    backgroundColor: 'grey',
                    margin: '0 auto',
                    borderRadius: '10px',
                  }}
                >
                  <img
                    src={displayPic}
                    alt="To be uploaded"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="mt-3"></div>
                <button className="btn btn-primary button-24 text-light rounded-pill m-2">
                  Select File
                </button>
                <br></br>
                <input
                  type="file"
                  style={{
                    position: 'absolute',
                    zIndex: '3',
                    marginTop: '-50px',
                    marginLeft: '-70px',
                    width: '150px',
                    height: '40px',
                    opacity: '0',
                  }}
                  onChange={(e) => {
                    const [file_selected] = e.target.files;
                    setfile(e.target.files[0]);
                    setDisplayPic(URL.createObjectURL(file_selected));
                  }}
                />
                <div className="mb-3"></div>
              </div>
              <div className="fields">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="py-4 ps-2 text-start">
                        Student ID
                        <br />
                        <small>Student ID (*Obligatory)</small>
                      </td>
                      <td className="px-5 pt-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Student ID"
                          defaultValue={studentID}
                          onChange={(e) => setStudentID(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 ps-2 text-start">
                        Student Name
                        <br />
                        <small>Student Name (Optional)</small>
                      </td>
                      <td className="px-5 pt-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Student Name"
                          defaultValue={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 ps-2 text-start">
                        Exam Mark
                        <br />
                        <small>Mark (*Obligatory)</small>
                      </td>
                      <td className="px-5 pt-4">
                        <select
                          id="mark"
                          className="form-control"
                          defaultValue={mark}
                          onChange={(e) => setMark(e.target.value)}
                          required
                        >
                          <option defaultValue="">Select</option>
                          {gradeOptions.map((option) => (
                            <option key={option} defaultValue={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 ps-2 text-start">
                        Category Exam
                        <br />
                        <small>Category (Optional)</small>
                      </td>
                      <td className="px-5 py-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              name="flexRadio"
                              id="flexRadioDefault4"
                              type="radio"
                              value="15 minute"
                              onChange={(e) => setCategory(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault4"
                            >
                              15 minute test
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              name="flexRadio"
                              id="flexRadioDefault3"
                              type="radio"
                              value="1 hour"
                              onChange={(e) => setCategory(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault3"
                            >
                              1 hour test
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 ps-2 text-start">
                        Status Exam
                        <br />
                        <small>Status (Optional)</small>
                      </td>
                      <td className="px-5 py-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              type="radio"
                              value="false"
                              onChange={(e) => setSts(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Checking
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              type="radio"
                              value="true"
                              onChange={(e) => setSts(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Finish
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-5 text-center">
                  <button
                    type="submit"
                    className={
                      statusBtn
                        ? 'btn btn-danger button-25 disabled'
                        : 'btn btn-success button-25'
                    }
                    onClick={mintNow}
                  >
                    {statusBtn ? 'Processing' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
            <div className="pb-2">
              <div className="status text-center text-info p-3">
                <b>{status}</b>
              </div>
            </div>
            <div className="text-center">
              This creates one of kind NFTs by setting the{' '}
              <code>max_supply</code> parameter to 0. But you can update it
              needed, it should be between <i>0-100</i>.
            </div>
          </div>
        )}
        <div className="p-3 text-center">
          {dispResponse && (
            <a
              href={`https://explorer.solana.com/address/${minted}?cluster=devnet`}
              target="_blank"
              className="btn btn-warning m-2 py-2 px-4"
              rel="noreferrer"
            >
              View on Explorer
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;

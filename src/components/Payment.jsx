import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Payment = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const copy = () => {
    let value = props.value;
    navigator.clipboard.writeText(value);
    toggleShow(); /* once the text is copied to the clipboard the toast is shown */
  };

  return (
    <>
      {/* The toast element requires a container for certain properties to be applied */}
      <ToastContainer position="bottom-end" className="success-toast mb-3">
        <Toast
          animation={true}
          autohide={true}
          delay="3000"
          bg="dark"
          onClose={toggleShow}
          show={show}
          className="toast"
        >
          <Toast.Header closeButton={true} closeLabel="Close">
            <b className="me-auto">Text copied to clipboard</b>
          </Toast.Header>
        </Toast>
      </ToastContainer>

      <div className="w-100">
        <div className="payment-btn d-flex justify-content-between align-items-center">
          <img
            src={props.img}
            alt={props.label + " logo"}
            className="payment-img"
          />
          <div className="mx-2 flex-grow-1 payment-label">{props.label}</div>
          <div>
            <button
              className="btn payment-action-btn btn-sm mx-0"
              onClick={copy}
            >
              <i className="bx bx-copy copy-icon payment-action-icon"></i>
            </button>
            <button
              className="btn payment-action-btn btn-sm mx-0"
              data-bs-toggle="modal"
              data-bs-target={"#" + props.id}
            >
              <i className="bx bx-qr copy-icon payment-action-icon"></i>
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id={props.id}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img
                    src={props.img}
                    width="40"
                    height="40"
                    className="mx-2"
                    alt={props.label + " logo"}
                  />{" "}
                  {props.label}
                </h5>
                <i
                  className="bx bx-x close-modal-icon"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></i>
              </div>
              <div className="modal-body d-flex justify-content-center py-4 pb-0">
                <div className="qr-container p-2">
                  <QRCodeSVG value={props.value} size="200" />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary mx-5 my-5 mt-5"
                aria-label="Close"
                onClick={copy}
              >
                <i className="bx bx-copy mx-2"></i>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

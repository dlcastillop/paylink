import React from "react";
import { QRCodeSVG } from "qrcode.react";

function Payment(props) {
  const copy = () => {
    let value = props.value;
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="w-100">
      <div className="payment-btn rounded-pill shadow mb-4 px-2 py-1 d-flex justify-content-between align-items-center">
        <img src={props.img} width="45" height="45" alt="Bitcoin logo" />
        <div className="d-inline mx-2 payment-label">{props.label}</div>
        <div className="d-inline">
          <button className="btn btn-link btn-sm mx-0" onClick={copy} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="black"
              className="bi bi-files"
              viewBox="0 0 16 16"
            >
              <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
            </svg>
          </button>
          <button className="btn btn-link btn-sm mx-0" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="black"
              className="bi bi-qr-code"
              viewBox="0 0 16 16"
            >
              <path d="M2 2h2v2H2V2Z" />
              <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
              <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
              <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
              <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="modal fade" id={props.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img src={props.img} width="40" height="40" alt="Bitcoin logo" /> {props.label}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center mb-4">
              <QRCodeSVG value={props.value} size="200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

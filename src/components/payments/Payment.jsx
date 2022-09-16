import React from "react";
import { QRCodeSVG } from "qrcode.react";

function Payment(props) {
  const copy = () => {
    let value = props.value;
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="w-100">
      <div className="payment-btn d-flex justify-content-between align-items-center">
        <img src={props.img} alt={props.label + " logo"} className="payment-img" />
        <div className="mx-2 flex-grow-1 payment-label">{props.label}</div>
        <div>
          <button className="btn payment-action-btn btn-sm mx-0" onClick={copy}>
            <i class="bi bi-clipboard copy-icon payment-action-icon"></i>
          </button>
          <button className="btn payment-action-btn btn-sm mx-0" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
            <i class="bi bi-qr-code-scan copy-icon payment-action-icon"></i>
          </button>
        </div>
      </div>

      <div className="modal fade" id={props.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img src={props.img} width="40" height="40" className="mx-2" alt={props.label + " logo"} /> {props.label}
              </h5>
              <button type="button" className="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center py-4 pb-0">
              <div className="qr-container p-2" >
                <QRCodeSVG value={props.value} size="200" />
              </div>
            </div>
            <button type="button" className="btn btn-primary mx-5 my-5 mt-5" aria-label="Close" onClick={copy}>
              <i class="bi bi-share-fill mx-3"></i>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

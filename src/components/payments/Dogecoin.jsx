import React from "react";
import { QRCodeSVG } from "qrcode.react";
import dogecoin from "../../images/crypto/doge.svg";

function Dogecoin(props) {
  const copy = () => {
    let address = props.address;
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="border border-dark rounded mb-3 px-4 py-1">
      <img src={dogecoin} width="50" height="50" alt="Dogecoin logo" />
      <button className="btn btn-primary btn-sm ms-2" onClick={copy}>
        Copy
      </button>
      <button
        className="btn btn-success btn-sm ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        QR Code
      </button>

      <div
        className="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img
                  src={dogecoin}
                  width="40"
                  height="40"
                  alt="Dogecoin logo"
                />{" "}
                Dogecoin
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <QRCodeSVG value={props.address} size="200" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogecoin;

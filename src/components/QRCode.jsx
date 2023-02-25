import { QRCodeSVG } from "qrcode.react";
import copy from "copy-to-clipboard";

const QRCode = ({ label, img, value }) => {
  const copyEvent = () => {
    const copiedQR = document.querySelector("#span-qr");

    copiedQR.classList.remove("hideTooltip");
    copiedQR.classList.add("showTooltip");

    setTimeout(() => {
      copiedQR.classList.remove("showTooltip");
      copiedQR.classList.add("hideTooltip");
    }, 3000);

    copy(value);
  };

  return (
    <div className="w-100">
      <div
        className="modal fade"
        id="modal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img
                  src={img}
                  width="40"
                  height="40"
                  className="mx-2"
                  alt={label + " logo"}
                />{" "}
                {label}
              </h5>
              <i
                className="bx bx-x close-modal-icon"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
            <div className="modal-body d-flex justify-content-center py-4 pb-0">
              <div className="qr-container p-2">
                <QRCodeSVG value={value} size="200" />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary mx-5 my-5 mt-5 tooltips"
              aria-label="Close"
              onClick={copyEvent}
              title={"Copy " + label + " address"}
            >
              <span className="tooltiptext hideTooltip qr-tooltip tooltipcolor" id="span-qr">
                Copied!
              </span>
              <i className="bx bx-copy mx-2"></i>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;

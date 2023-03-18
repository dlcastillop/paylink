import { QRCodeSVG } from "qrcode.react";
import copy from "copy-to-clipboard";

const Modal = ({ qrData }) => {
  const copyEvent = (e) => {
    const tooltip = e.currentTarget;
    tooltip.setAttribute("data-tip", "Copied!");

    setTimeout(() => {
      tooltip.setAttribute("data-tip", "Copy");
    }, 3000);

    copy(qrData.value);
  };

  return (
    <>
      <input type="checkbox" id="modal-qr" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modal-qr"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="flex gap-3 items-center">
            <img src={qrData.img} alt={qrData.label} className="w-8 h-8" />
            <h3 className="text-lg font-bold">{qrData.label}</h3>
          </div>

          <div className="p-2 rounded-lg bg-white border-neutral border-2 w-fit m-auto my-6">
            <QRCodeSVG value={qrData.value} size="200" />
          </div>

          <div className="text-center">
            <div
              className="tooltip tooltip-accent"
              data-tip="Copy"
              onClick={(e) => copyEvent(e)}
            >
              <button className="btn btn-md btn-wide bg-neutral border-0 text-neutral-content hover:bg-neutral-focus">
                <i className="bx bx-copy text-lg mr-2"></i> Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

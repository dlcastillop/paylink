import copy from "copy-to-clipboard";

const Payment = ({ label, img, value, id, showQRCode }) => {
  const copyEvent = () => {
    const copiedSpan = document.querySelector("#span" + id);

    copiedSpan.classList.remove("hideTooltip");
    copiedSpan.classList.add("showTooltip");

    setTimeout(() => {
      copiedSpan.classList.remove("showTooltip");
      copiedSpan.classList.add("hideTooltip");
    }, 3000);

    copy(value);
  };

  const showQR = () => {
    showQRCode(label, img, value);
  };

  return (
    <div className="w--100">
      <div className="payment-btn flex justify-content--between align-items--center">
        <img src={img} alt={label + " logo"} className="payment-img" />
        <div className="mx--2 flex-grow--1 payment-label">{label}</div>
        <div>
          <button
            className="btn-d payment-action-btn mx--0 tooltips"
            onClick={copyEvent}
            title={"Copy " + label + " address"}
          >
            <span
              className="tooltiptext hideTooltip main-tooltip tooltipcolor"
              id={"span" + id}
            >
              Copied!
            </span>
            <i className="bx bx-copy copy-icon payment-action-icon"></i>
          </button>
          <button
            className="btn-d payment-action-btn mx--0"
            data-bs-toggle="modal"
            data-bs-target={"#modal"}
            onClick={showQR}
            title={"Scan " + label + " address"}
          >
            <i className="bx bx-qr copy-icon payment-action-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

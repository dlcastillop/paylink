import copy from "copy-to-clipboard";

const Payment = ({ img, label, value, theme, setQrData }) => {
  const rh =
    theme === "swordfest-theme" || theme === "swordfest-dark-theme"
      ? "h-16 rounded-md"
      : "h-14 rounded-full";

  const copyEvent = (e) => {
    const tooltip = e.currentTarget;
    tooltip.setAttribute("data-tip", "Copied!");

    setTimeout(() => {
      tooltip.setAttribute("data-tip", "Copy");
    }, 3000);

    copy(value);
  };

  return (
    <div
      className={
        "flex justify-between items-center p-4 sm:mx-0 mx-1 bg-neutral shadow-md transition ease-in-out delay-150 sm:hover:scale-105 duration-300 " +
        rh
      }
    >
      <img src={img} alt={label + " logo"} className="w-8 h-8" />
      <p className="font-normal text-base text-neutral-content mx-2 flex-grow text-center pl-9">
        {label}
      </p>
      <div>
        <div
          className="tooltip tooltip-accent"
          data-tip="Copy"
          onClick={(e) => copyEvent(e)}
        >
          <button
            className="btn btn-sm bg-neutral border-0 text-neutral-content hover:bg-neutral-focus"
            title="Copy"
            onMouseEnter={(e) => e.currentTarget.removeAttribute("title")}
            onMouseLeave={(e) => e.currentTarget.setAttribute("title", "Copy")}
          >
            <i className="bx bx-copy text-lg"></i>
          </button>
        </div>

        <div className="tooltip tooltip-accent" data-tip="Scan">
          <label
            htmlFor="modal-qr"
            className="btn btn-sm bg-neutral border-0 text-neutral-content hover:bg-neutral-focus"
            onClick={() => setQrData({ img, label, value })}
            title="Scan"
            onMouseEnter={(e) => e.currentTarget.removeAttribute("title")}
            onMouseLeave={(e) => e.currentTarget.setAttribute("title", "Scan")}
          >
            <i className="bx bx-qr text-lg"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Payment;

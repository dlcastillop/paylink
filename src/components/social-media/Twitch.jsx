import React from "react";

export function Twitch(props) {
  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#000"
        className="bi bi-twitch"
        viewBox="0 0 16 16"
      >
        <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
        <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
      </svg>
    </a>
  );
}


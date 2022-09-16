import React from "react";

function SocialMedia(props) {
  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <img src={props.img} alt={props.label + " icon"} width="25" height="25" />
    </a>
  );
}

export default SocialMedia;

import React from "react";

function SocialMedia(props) {
  const icon = "social-icon bi bi-" + props.type;

  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <i className={icon}></i>
    </a>
  );
}

export default SocialMedia;

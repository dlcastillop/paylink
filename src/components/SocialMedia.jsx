import React from "react";

const SocialMedia = (props) => {
  let icon = "social-icon bx bxl-" + props.type;

  if (props.type == "link") {
    icon = "social-icon bx bx-" + props.type;
  }

  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;

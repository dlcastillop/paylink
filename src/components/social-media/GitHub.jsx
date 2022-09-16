import React from "react";

function GitHub(props) {
  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
     <i class="bi-github"></i>
    </a>
  );
}

export default GitHub;

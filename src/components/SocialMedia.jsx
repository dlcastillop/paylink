const SocialMedia = (props) => {
  let icon = "social-icon bx " + props.value;

  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;

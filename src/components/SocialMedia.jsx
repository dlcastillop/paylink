const SocialMedia = ({ value, href, label }) => {
  let icon = "social-icon bx " + value;

  return (
    <a href={href} target="_blank" className="ms--2 me--2" title={label}>
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;

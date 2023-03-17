const SocialMedia = ({ value, href }) => {
  let icon = "text-2xl bx " + value;

  return (
    <a href={href} target="_blank">
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;

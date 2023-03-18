const SocialMedia = ({ value, href, label }) => {
  let icon = "text-2xl bx " + value;

  return (
    <a
      href={href}
      target="_blank"
      title={label}
      onMouseEnter={(e) => e.currentTarget.removeAttribute("title")}
      onMouseLeave={(e) => e.currentTarget.setAttribute("title", label)}
    >
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;

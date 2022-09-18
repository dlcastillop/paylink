export const metaTags = (name) => {
  let title = "PayLink | Pay or donate to " + name;

  // Set title tag
  document.title = title;

  // Set meta tag (title)
  let meta = document.querySelectorAll("meta")[2];
  meta.setAttribute("content", title);

  // Set meta tag (og:url and title)
  meta = document.querySelectorAll("meta")[5];
  meta.setAttribute("og:url", window.location);

  meta = document.querySelectorAll("meta")[6];
  meta.setAttribute("og:title", title);

  // Set meta tag (twitter:url and twitter:title)
  meta = document.querySelectorAll("meta")[10];
  meta.setAttribute("twitter:url", window.location);

  meta = document.querySelectorAll("meta")[11];
  meta.setAttribute("twitter:title", title);
};

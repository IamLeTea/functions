const getShareToFacebookLink = (url = "") => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url || location.href}`;
};

module.exports = getShareToFacebookLink;

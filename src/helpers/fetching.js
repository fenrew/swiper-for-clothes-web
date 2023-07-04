export const getApiUrl = (url, user) => {
  let apiUrl = process.env.REACT_APP_API_URL + url;
  if (user.tempToken) {
    apiUrl += "?token=" + user.tempToken;
  } else {
    const tempToken = localStorage.getItem("tempToken");
    if (tempToken && tempToken !== "null") {
      apiUrl += "?token=" + tempToken;
    }
  }

  return apiUrl;
};

export const getImageUrl = (image) => {
  return (
    process.env.REACT_APP_API_URL + "/downloaded-images/xxl/male-shoes/" + image
  );
};

let apiUrl;
const apiUrls = {
  production: "https://final-workout-database.herokuapp.com/api",
  development: "https://final-workout-database.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;

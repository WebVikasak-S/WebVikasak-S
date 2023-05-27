/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "material-ui.com",
      "nodejs.org",
      "angular.io",
      "vuejs.org",
      "expressjs.com",
      "www.mongodb.com",
      "www.mysql.com",
      "www.postgresql.org",
      "www.djangoproject.com",
      "flask.palletsprojects.com",
      "spring.io",
      "www.docker.com",
      "vercel.com",
      "www.netlify.com",
      "material-ui.com",
    ],
  },
};

module.exports = nextConfig;

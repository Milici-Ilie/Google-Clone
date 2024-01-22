/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
    ],
  },
}; // the code that give acces on IMG's is "remotePatterns: [ 👃👃[BODY CONTENT]👃👃
// {
//   protocol: "https",
//   hostname: "upload.wikimedia.org",
//   pathname: "**",
// },
// ],"

export default nextConfig;

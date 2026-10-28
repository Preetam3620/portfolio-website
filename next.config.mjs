/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/Preetam_Maske.pdf", destination: "/Preetam_Resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;

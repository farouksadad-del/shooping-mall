// GITHUB_PAGES=true  -> site statique pour GitHub Pages (pas de route /api, formulaires via WhatsApp)
// sinon               -> site avec serveur (npm run dev, Vercel) : /api/contact envoie les e-mails
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/shooping-mall" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isPages ? "export" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  pageExtensions: isPages ? ["js", "jsx"] : ["api.js", "js", "jsx"],
};

export default nextConfig;

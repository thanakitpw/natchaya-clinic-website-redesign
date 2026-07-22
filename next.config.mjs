import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A stray package-lock.json in the home directory makes Next guess the wrong workspace
  // root; pin it to this project so asset/font tracing stays correct.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

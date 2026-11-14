import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { tmred: "#E50914", ink: "#080808", charcoal: "#111111" } } },
  plugins: []
};
export default config;
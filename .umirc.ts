import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  antd: {},
  icons: { autoInstall: {} },
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/antd"],
});

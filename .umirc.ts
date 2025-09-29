import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  antd: {},
  icons: {
    autoInstall: {},
    include: [
      // 3D打印技术相关图标
      'mdi:laser-pointer',
      'mdi:fire',
      'mdi:printer-3d',
      'mdi:gear',

      // CNC加工技术相关图标
      'mdi:cog',
      'mdi:rotate-left',
      'mdi:circle-outline',
      'mdi:vector-square',
      'mdi:lightning-bolt',
      'mdi:flash',
      'mdi:water',

      // 钣金工艺相关图标
      'mdi:hammer',
      'mdi:angle-acute',
      'mdi:scissors-cutting',
      'mdi:hammer-screwdriver',
      'mdi:cube-outline',
      'mdi:spray',

      // 其他页面使用的图标
      'mdi:factory',
      'mdi:flask',
      'mdi:target',
      'mdi:truck-delivery',
      'mdi:cloud',
      'mdi:play',
      'mdi:lock',
      'mdi:chevron-left',
      'mdi:chevron-right',
      'mdi:facebook',
      'mdi:twitter',
      'mdi:linkedin',
      'mdi:youtube',
      'mdi:map-marker',
      'mdi:phone',
      'mdi:email',
      'mdi:clock',
      'mdi:upload',
      'mdi:shopping-cart',
      'mdi:package-variant',
      'mdi:rocket-launch',
      'mdi:school',
      'mdi:car-wrench',
      'mdi:chip',
      'mdi:medical-bag',
      'mdi:cellphone',
      'mdi:lightbulb',
      'mdi:robot'
    ]
  },
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/antd"],
});

import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  managerHead: (head) => {
    return `
      ${head}
       <base href="/storybook/">
    `;
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      ...config,
      base: "/storybook/",
    });
  },
};
export default config;

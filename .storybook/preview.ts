import type { Preview } from "@storybook/vue";

import { withVuetify } from "./addon-vuetify";

import "../src/index.css";

const preview: Preview = {
  decorators: [withVuetify],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
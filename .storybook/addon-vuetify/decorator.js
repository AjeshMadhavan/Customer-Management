import Vue from 'vue';
import Vuetify from 'vuetify';
import { makeDecorator } from '@storybook/addons';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (storyFn, context, { parameters = {} }) => {
    
    const vuetify = new Vuetify(parameters);
    const WrappedComponent = storyFn(context);

    return Vue.extend({
      vuetify,
      components: { WrappedComponent },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `,
    });
  },
});
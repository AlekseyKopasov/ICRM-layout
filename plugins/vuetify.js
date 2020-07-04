import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  theme: {
    themes: {
      light: {
        primary: '#121212', // a color that is not in the material colors palette
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: '#82b1ff',
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: '#4caf50',
      },
      dark: {
        success: colors.grey.darken3,
      },
    },
  },
})

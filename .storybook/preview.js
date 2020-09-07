import "../styles/global.scss";
import { addParameters } from '@storybook/client-api';


addParameters({
  docs: {
    prepareForInline: (storyFn) => storyFn(),
  },
  controls: { expanded: true }
});


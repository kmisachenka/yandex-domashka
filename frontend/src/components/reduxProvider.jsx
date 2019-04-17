import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../store/configureStore';

// eslint-disable-next-line react/prop-types
export default function Provider({ story }) {
  return <ReduxProvider store={store}>{story}</ReduxProvider>;
}

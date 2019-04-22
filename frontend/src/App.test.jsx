import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  fetch.once(
    JSON.stringify({
      ok: true,
      results: {
        notes: [],
        tags: [],
        colors: [],
      },
    })
  );
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

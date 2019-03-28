import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

const StateContext = React.createContext({});

const StateProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <StateContext.Provider
      value={{
        state,
        setState: s => setState(s),
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StateProvider, StateContext };

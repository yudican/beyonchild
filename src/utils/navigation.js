import {createRef} from 'react';

export const NavigationRef = createRef();

export function navigate(name, params = {}) {
  NavigationRef.current?.navigate(name, params);
  return {
    type: 'NAVIGATE',
  };
}

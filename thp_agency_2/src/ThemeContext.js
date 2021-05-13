import React, { createContext } from 'react';
import Theme from './Theme';

const ThemeContext = createContext(Theme.dark);

export default ThemeContext;

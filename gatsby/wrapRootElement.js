import react from 'React';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';

export default function Root({ element }) {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}

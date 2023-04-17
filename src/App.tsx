import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: 'Poppins, sans serif' }}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;

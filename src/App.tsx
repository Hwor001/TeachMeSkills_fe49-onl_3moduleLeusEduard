import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ui/theme/themeContext';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

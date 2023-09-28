import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ui/theme/themeContext'; // Import the ThemeProvider
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

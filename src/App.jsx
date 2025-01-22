import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Temp from './components/temp';
import Temp1 from './components/Temp1';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
            <Temp/>
      ),
    },
    {
      path: "/temp",
      element: (
            <Temp1/>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App
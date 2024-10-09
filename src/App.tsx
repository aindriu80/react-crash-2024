import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import MainLayout from './layouts/MainLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router} />
};

export default App;

import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import JobsPage from './pages/JobsPage.tsx';
import AddJob from './components/AddJob.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJob />} />
      <Route path='*' element={<NotFoundPage />} />

    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router} />
};

export default App;

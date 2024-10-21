import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import JobsPage from './pages/JobsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import JobPage, { jobLoader } from './pages/JobPage.tsx';
import AddJobPage from './pages/AddJobPage.tsx';
import EditJobPage from './pages/EditJobPage.tsx';

interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string | number; // Allow 'salary' to be either a string or a number
  company?: { // Optional 'company' property
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  }
}

interface NewJob {
  job: Job;
}


const App = () => {
  // Add New job
  const addJob = async (newJob: NewJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // Delete Job 
  const deleteJob = async (id: number) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };


  // Update Job 
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />  <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
};

export default App;

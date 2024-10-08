import Navbar from "./components/Navbar";
import Hero from "./components/Hero.tsx";
import HomeCards from "./components/HomeCards.tsx";
import JobListings from "./components/JobListings.tsx";
import ViewAllJobs from "./components/ViewAllJobs.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;

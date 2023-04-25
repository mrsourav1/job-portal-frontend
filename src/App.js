import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ExampleForm from "./screens/ExampleForm.jsx";
import Modal from "./components/Modal";
import JobCard from "./components/JobCard";
import JobPageSideBar from "./components/JobPageSideBar";
import JobPage from "./screens/JobPage";
import JobDescription from "./screens/JobDescription";
import Example from "./components/Example";
import AwsIot from "./screens/AwsIot";


function App() {
  return (
    <>
      <Router> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ExampleForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/jobs" element={<JobPage />} />
        </Routes>
      </Router>
      {/*  <Modal /> */}
      {/* <ExampleForm /> */}
      {/* <JobPageSideBar /> */}
      {/* <JobDescription /> */}
      {/* <JobPage /> */}
      {/* <Example /> */}
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProblemStatements, RegistrationForm, Rules, Contact, Sponsors, SubmissionPortal, Schedule, FAQs } from "./pages";
import { Navbar } from "./components";
import "./App.css";
import './assets/scss/main.scss';



function App() {
  return (
    <Router>
        <Navbar /> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-statements" element={<ProblemStatements />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/registration-form" element={<RegistrationForm />} />
            <Route path="/submission-portal" element={<SubmissionPortal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/faq" element={<FAQs/>}/>
          </Routes>
    </Router>
  );
}

export default App;

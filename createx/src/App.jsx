import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProblemStatements, RegistrationForm, Rules, Contact, Sponsors, SubmissionPortal, Schedule, FAQs } from "./components";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-statements" element={<ProblemStatements />} />
            <Route path="/rules-guidelines" element={<Rules />} />
            <Route path="/registration-form" element={<RegistrationForm />} />
            <Route path="/submission-portal" element={<SubmissionPortal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/faq" element={<FAQs/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

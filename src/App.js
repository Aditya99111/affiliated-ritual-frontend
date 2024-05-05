import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import TeamLeader from './Flows/TeamLeader/TeamLeader';
import Student from './Flows/Student/Student';
import TeamMember from "./Flows/TeamMember/TeamMember";
import ClubAdmin from "./Flows/ClubAdmin/ClubAdmin";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/student" element={<Student />} />

          <Route path="/teamleader" element={<TeamLeader />} />
          <Route path="/teammember" element={<TeamMember />} />
          <Route path="/clubadmin" element={<ClubAdmin />} />


          
          <Route path="/" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

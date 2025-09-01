
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainScreen from './mainscreen.js';
import AddTasks from './addtasks.js';
import DisplayTasks from './displayTasks.js';

function App() {
  <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/addtask" element={<AddTasks />} />
        <Route path="/displaytask" element={<DisplayTasks />} />
      </Routes>
  </Router>
  
};

export default App;

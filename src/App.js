import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import TaskOne from './component/TaskOne';
import TaskTwo from './component/TaskTwo';
import TaskFour from './component/TaskFour';
import TaskThree from './component/TaskThree';
import { Routes,Route }  from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/taskOne" element={<TaskOne />} />
      <Route path="/taskTwo" element={<TaskTwo />} />
      <Route path="/taskFour" element={<TaskFour />} />
      <Route path="/taskThree" element={<TaskThree />} />
    </Routes>
    </>
  )
}

export default App;

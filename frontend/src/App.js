import TAModal from "./modal/TAModal";
import TACalendarModal from "./modal/TACalendarModal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TAModal/>}/>
        <Route path="/schedule" element={<TACalendarModal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

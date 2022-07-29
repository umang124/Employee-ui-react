import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

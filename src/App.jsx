import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Welcome from './Pages/Welcome';
import Home    from './Pages/Home';
import CountryDetails from './Pages/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


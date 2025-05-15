import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Welcome from './Pages/Welcome';
import AllCountries    from './Pages/AllCountries';
import CountryDetails from './Pages/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/AllCountries" element={<AllCountries />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


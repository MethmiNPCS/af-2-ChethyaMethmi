import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Welcome from './Pages/Welcome';
import AllCountries    from './Pages/AllCountries';
import CountryDetails from './Pages/CountryDetails';
import Favorites from './Pages/Favourites'; 
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/allcountries" element={<AllCountries />} />
        <Route path="/country/:code" element={<CountryDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
        />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


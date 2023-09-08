import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import ProtectedRoute from './ProtectedRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Distributor from './components/pages/Distributor';
import Upload from './components/pages/Upload';


// Define your components (e.g., Login, Home, Dashboard, etc.)

function App() {

  return (
    <>
      <div className="App">
        <Container maxWidth="md">
          <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
              <Route path='/signin' element={<Login />} />
              <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path='/catalog' element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
              <Route path='/distributor' element={<ProtectedRoute><Distributor /></ProtectedRoute>} />
              <Route path='/upload' element={<ProtectedRoute><Upload /></ProtectedRoute>} />
              <Route path='/addForm' element={<ProtectedRoute><AddForm /></ProtectedRoute>} />
              <Route path='/editForm/:idDistributor' element={<ProtectedRoute><EditForm /></ProtectedRoute>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Container>
      </div>
    </>
  );
}


export default App;

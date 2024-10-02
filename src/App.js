import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import IdentityDocuments from './IdentityDocuments';
import Faq from './Faq'; 
import Header from './components/Header';
import Contact from './Contact';
import Footer from './components/Footer';
import MemberUnits from './components/MemberUnits';
import News from './News';
import NewsDetail from './NewsDetail'; 
import Home from './Home'; // Import Home component

const App = () => {
  return (
    <Router>
      <Header /> {/* This will appear on all pages */}
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/identity-documents" element={<IdentityDocuments />} />
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} /> {/* Route for news detail */}
      </Routes>
      <Footer /> {/* This will appear on all pages */}
      <MemberUnits /> {/* If you want this to appear on all pages */}
    </Router>
  );
};

export default App;

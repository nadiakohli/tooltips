import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Components
import FirstCase from 'components/cases/FirstCase';
import SecondCase from 'components/cases/SecondCase';
import ThirdCase from 'components/cases/ThirdCase';

const Routess = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FirstCase />} />
      <Route path="/2" element={<SecondCase />} />
      <Route path="/3" element={<ThirdCase />} />
    </Routes>
  </Router>
);

export default Routess;
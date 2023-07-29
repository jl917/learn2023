import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@/pages/Main';
import SubPage from '@/pages/Sub';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

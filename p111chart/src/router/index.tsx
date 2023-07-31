import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@/pages/Main';
import DatasetPage from '@/pages/Dataset';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dataset" element={<DatasetPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

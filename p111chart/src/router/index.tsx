import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@/pages/Main';
import DatasetPage from '@/pages/Dataset';
import AxisPage from '@/pages/Axis';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dataset" element={<DatasetPage />} />
        <Route path="/axis" element={<AxisPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

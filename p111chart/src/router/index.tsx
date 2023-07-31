import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@/pages/Main';
import DatasetPage from '@/pages/Dataset';
import AxisPage from '@/pages/Axis';
import EventPage from '@/pages/Event';
import LoadingPage from '@/pages/Loading';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dataset" element={<DatasetPage />} />
        <Route path="/axis" element={<AxisPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

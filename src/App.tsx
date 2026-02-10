import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import Constructors from './pages/Constructors';
import Schedule from './pages/Schedule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="constructors" element={<Constructors />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="results" element={<div className="text-center py-20 text-gray-500">Results Page Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

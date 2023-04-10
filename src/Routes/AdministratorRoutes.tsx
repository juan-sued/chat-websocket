import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../screens/HomePage/HomePage';

const AdministratorRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
export default AdministratorRoutes;

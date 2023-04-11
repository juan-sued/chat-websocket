import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../screens/HomePage/HomePage';
import { ChatBasicGiant } from '../shared/chats/ChatBasicGiant';

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/chat" element={<ChatBasicGiant />} />
  </Routes>
);

export default PublicRoutes;

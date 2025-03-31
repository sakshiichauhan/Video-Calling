import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';  
import RoomPage from './Pages/RoomPage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
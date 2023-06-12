import 'tailwindcss/tailwind.css';
import Arena from './components/shared/arena/Arena.jsx';
import Leaderboard from './components/shared/modals/leaderboards-panel/Leaderboard.jsx';
import GameConfigurationPanel from './components/shared/modals/game-configuration-panel/GameConfigurationPanel.jsx';
import Footer from './components/shared/footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-red-100 to-red-300 p-4">
        <Arena />
        <Leaderboard />
        <GameConfigurationPanel />
        <ToastContainer position="top-center" />
      </div>
      <Footer />
    </>
  );
}

export default App;

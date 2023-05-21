import 'tailwindcss/tailwind.css';
import Arena from "./components/shared/arena/Arena.jsx";
import Leaderboard from './components/shared/modals/Leaderboard.jsx';
import GameConfigurationPanel from './components/shared/modals/game-configuration-panel/GameConfigurationPanel.jsx';

function App() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-red-100 to-red-300 p-4">
            <Arena/>
            {/*<Leaderboard />*/}
            <GameConfigurationPanel/>
        </div>
    );
}

export default App;

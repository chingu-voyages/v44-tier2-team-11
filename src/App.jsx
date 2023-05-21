import 'tailwindcss/tailwind.css';
import Arena from "./components/shared/arena/Arena.jsx";
import Leaderboard from './components/shared/Modals/Leaderboard.jsx';
import GameConfigurationPanel from './components/shared/Modals/GameConfigurationPanel/GameConfigurationPanel.jsx';

function App() {
    return (
        <div className="w-full bg-gradient-to-b from-red-100 to-red-300 p-4">
            <Arena/>
            {/*<Leaderboard />*/}
            <GameConfigurationPanel
            />
        </div>
    );
}

export default App;

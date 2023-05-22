import GameConfigurationPanelContext from '../../../../contexts/game-configuration-panel/GameConfigurationPanel.jsx';
import GameConfigurationPanelContent from './GameConfigurationPanelContent.jsx';

const GameConfigurationPanel = () => {
  return (
    <GameConfigurationPanelContext>
      <GameConfigurationPanelContent />
    </GameConfigurationPanelContext>
  );
};

export default GameConfigurationPanel;

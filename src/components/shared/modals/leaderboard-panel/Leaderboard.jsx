import { useContext } from 'react';
import Modal from '../../../base/Modal.jsx';
import GlobalContext from '../../../../contexts/global-context/global-context.js';

// Components
import LeaderboardHeader from './LeaderboardHeader.jsx';
import LeaderboardRow from './LeaderboardRow.jsx';

// class Leaderboard extends React.Component {
const Leaderboard = () => {
  // render(){
  const { showLeaderboard, setShowLeaderboard, botScores } =
    useContext(GlobalContext);

  const onClickCloseModal = () => {
    setShowLeaderboard(false);
  };

  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
      shouldShow={showLeaderboard}
      onClickCloseModal={onClickCloseModal}
    >
      <LeaderboardHeader />
      <div className="mb-8 mt-10">
        {botScores?.current?.map((bot) => (
          <LeaderboardRow key={bot.id} {...bot} className="mb-10" />
        ))}
      </div>
    </Modal>
  );
  // }
};
export default Leaderboard;

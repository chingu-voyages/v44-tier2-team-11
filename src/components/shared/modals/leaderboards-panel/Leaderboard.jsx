import React, { useContext, useState } from 'react';
import Modal from '../../../base/Modal.jsx';
import LeaderboardHeader from './LeaderboardHeader.jsx';
import LeaderboardScoreRows from './LeaderboardScoreRows.jsx';
import GlobalContext from '../../../../contexts/global-context/global-context.js';
import ModalTitle from '../../../base/ModalTitle.jsx';
import LeaderboardEmpty from './LeaderboardEmpty.jsx';

const Leaderboard = () => {
  const { bots, showLeaderboard, setShowLeaderboard } =
    useContext(GlobalContext);

  const onClickCloseModal = () => {
    setShowLeaderboard(false);
  };

  if (bots.length === 0) {
    return (
      <Modal
        mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
        shouldShow={showLeaderboard}
        onClickCloseModal={onClickCloseModal}
      >
        <LeaderboardEmpty />
      </Modal>
    );
  }

  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
      shouldShow={showLeaderboard}
      onClickCloseModal={onClickCloseModal}
    >
      <ModalTitle>Ranking Leaderboard</ModalTitle>
      <LeaderboardHeader />
      <LeaderboardScoreRows />
    </Modal>
  );
};

export default Leaderboard;

import React, { useContext, useState } from "react";
import Modal from "../../../base/Modal.jsx";
import LeaderboardHeader from "./LeaderboardHeader.jsx";
import LeaderboardScoreRows from "./LeaderboardScoreRows.jsx";
import GlobalContext from "../../../../contexts/global-context/global-context.js";

// class Leaderboard extends React.Component {
const Leaderboard = () => {

    // render(){
        const { showLeaderboard, setShowLeaderboard } = useContext(GlobalContext);

        const onClickCloseModal = () =>{
            setShowLeaderboard(false);
        }

        return(
            <Modal
            mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
            shouldShow={showLeaderboard}
            onClickCloseModal={onClickCloseModal}          
            >

                <LeaderboardHeader />
                {/* <Header title='Leaderboard' allBots={this.state.bots.length}/> */}
                <LeaderboardScoreRows />

            </Modal>

        );
    // }
}

export default Leaderboard;

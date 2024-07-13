import React, { useEffect, useState } from 'react';
import style from '../../pages/Score/score.module.css'; 
import Logo from '../../components/Logo';

const { scorecard, playeravatar, playerinfo, playername, playerscore } = style;

const ScoreCard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/api/score/get-all')
            .then(response => response.json())
            .then(data => {
                if (data.process) {
                    setScores(data.data);
                } else {
                    console.error('Error retrieving scores:', data.message);
                }
            })
            .catch(error => console.error('Error fetching scores:', error));
    }, []);

    return (
        <>
            {scores.map((player, index) => (
                <div key={index} className={scorecard}>
                    <div className={playeravatar}>
                        <Logo />
                    </div>
                    <div className={playerinfo}>
                        <div className={playername}>{player.nickname}</div>
                        <div className={playerscore}>Score: {player.score}</div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ScoreCard;

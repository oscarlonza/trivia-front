import React from 'react';
import style from './score.module.css'; 
import Logo from '../../components/Logo'; 
import ScoreCard from '../../components/ScoreCard';

const { card, logo } = style;

const Score = () => {
    return (
        <div className={card}>
            <div className={logo}>
                <Logo />
            </div>
            <ScoreCard />
        </div>
    );
}

export default Score;

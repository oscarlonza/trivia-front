import React from 'react';
import style from './score.module.css';
import Logo from '../../components/Logo';
import ScoreCard from '../../components/ScoreCard';

const { container, card, logo } = style;

const Score = () => {
    return (
        <div className={container}>
            <div className={card}>
                <div className={logo}>
                    <Logo />
                </div>
                <ScoreCard />
            </div>
        </div>
    );
}

export default Score;

import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import styles from './confetti.module.css'

const Confetti = () => {
  const canvasRef = useRef(null);

  const fireConfetti = () => {
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  //style={{ position: 'fixed', width: '100%', height: '100%', pointerEvents: 'none' }}
  return (
    <div>
      <canvas ref={canvasRef} className={styles.canva}  />
      <button onClick={fireConfetti}>Lanzar Confetti</button>
    </div>
  );
};

export default Confetti;

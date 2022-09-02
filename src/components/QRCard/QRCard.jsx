import React from 'react';

import qr from '../../assets/img/image-qr-code.png';
import styles from './QRCard.module.scss';

function QRCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={qr} alt="qr" />
        <h1>
          Improve your front-end <br />
          skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}

export default QRCard;

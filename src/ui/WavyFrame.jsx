import React from 'react';
import './wavyFrame.module.css'; // CSS dosyasını ekleyin veya stilleri içe aktarın
import f1 from './gedesekli.jpeg'
const WavyFrame = ({ imageSrc }) => {
  return (
    <div className="container">
      <div className="circle-frame">
        <img src={f1} alt="Resim" className="image" />
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default WavyFrame;

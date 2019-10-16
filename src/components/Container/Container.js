import React from 'react';
import ReactPlayer from 'react-player';
import d from '../../images/video.mp4';
import s from './Container.module.css';

const Container = () => {
  return (
    <div className={s.cont}>
      <ReactPlayer
        url={d}
        autoPlay
        playing
        className={s.j}
        width="100%"
        height="100%"
      />
      <div className={s.for_background}>
        <div className={s.title_cont}>
          <p className={s.title}>Visa Signature</p>
          <h2 className={s.title_big}>ТВОЯ КАРТКА ДЛЯ ПОДОРОЖЕЙ</h2>
        </div>
      </div>
    </div>
  );
};

export default Container;

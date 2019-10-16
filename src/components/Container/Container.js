import React from 'react';
import ReactPlayer from 'react-player';
import d from '../../images/video.mp4';
import s from './Container.module.css';

const Container = () => {
  return (
    <div className={s.cont}>
      <ReactPlayer url={d} playing className={s.j} width="104%" height="100%" />
    </div>
  );
};

export default Container;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactPlayer from 'react-player';
import d from '../../images/video.mp4';
import s from './Container.module.css';
import card from '../../images/Group.png';
import mini from '../../images/MaskGroup.png';

const Container = () => {
  return (
    <div className={s.cont}>
      <ReactPlayer
        url={d}
        playing
        autoPlay
        className={s.j}
        width="100%"
        height="100%"
      />
      <div className={s.for_background}>
        <div className={s.section_card}>
          <div className={s.title_cont}>
            <p className={s.title}>Visa Signature</p>
            <p className={s.title_big}>ТВОЯ КАРТКА ДЛЯ ПОДОРОЖЕЙ</p>
          </div>
          <div className={s.card}>
            <img className={s.card_img} src={card} alt="card" />
          </div>
        </div>
        <div className={s.cont_infoCont}>
          <div className={s.table}>
            <div className={s.titles}>
              <h2 className={s.plan_title}>Планування подорожі</h2>
              <p className={s.title_desc}>
                Ретельна підготовка - запорука вдалої мандрівки.
              </p>
              <div className={s.table_content}>
                <div className={s.table_content_contr}>
                  <ul className={s.items}>
                    <li className={s.item}>
                      <a href="" className={s.link}>
                        <img className={s.img1} src={mini} alt="mini card" />
                        <h2 className={s.title_item}>
                          Visa Luxury Hotel collection
                        </h2>
                        <p className={s.item_descr}>
                          Діє по всьому світу цілодобово й надає для вас
                          глобальний сервіс інформаційної підтримки в
                          телефонному режимі.
                        </p>
                        <a href="" className={s.link1}>
                          Подробнее >
                        </a>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

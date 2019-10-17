/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactPlayer from 'react-player';
import d from '../../images/video.mp4';
import s from './Container.module.css';
import card from '../../images/Group.png';
import mini from '../../images/MaskGroup.png';
import visa from '../../images/Visa.png';
import black from '../../images/Black.png';
import car from '../../images/Generic.png';
import pers from '../../images/Persinal.png';
import agoda from '../../images/Agoda.png';

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
                    <li className={s.item}>
                      <img className={s.img1} src={visa} alt="black" />
                      <h2 className={s.title_item}>Оренда сейфу</h2>
                      <p className={s.item_descr}>
                        Орендуйте сейф зі знижкою 30 % для надійного зберігання
                        важливих документів та цінних речей, доки ви за
                        кордоном.
                      </p>
                    </li>
                    <li className={s.item2}>
                      <a href="" className={s.link}>
                        <img className={s.img2} src={black} alt="mini card" />
                        <h2 className={s.title_item}>
                          Повне страхування подорожі до 500 000 $
                        </h2>
                        <p className={s.item_descr}>
                          Сума страхового покриття для власників карток Visa
                          Signature
                        </p>
                        <a href="" className={s.link1}>
                          Подробнее >
                        </a>
                      </a>
                    </li>
                  </ul>
                  <ul className={s.items2}>
                    <li className={s.item3}>
                      <a href="" className={s.link}>
                        <img className={s.img3} src={car} alt="car" />
                        <h2 className={s.title_item3}>Оренда авто</h2>
                        <p className={s.item_descr}>
                          Бронюйте автомобілі по всьому світу, оплачуйте карткою
                          Visa Signature та отримайте знижку
                        </p>
                        <a href="" className={s.link1}>
                          Подробнее >
                        </a>
                      </a>
                    </li>
                    <li className={s.item}>
                      <img className={s.img1} src={pers} alt="personal" />
                      <h2 className={s.title_item}>Персональний менеджер</h2>
                      <p className={s.item_descr4}>
                        Ваш фінансовий помічник, який завжди допоможе: {'\n'}-
                        здійснити банківські операції за вашим дорученням {'\n'}
                        - підготувати всі необхідні документи до вашого візиту в
                        Банк {'\n'}- надасть якісні консультації й підбере для
                        вас найкращі умови
                      </p>
                    </li>
                  </ul>
                  <ul className={s.items3}>
                    <li className={s.item}>
                      <a href="" className={s.link}>
                        <img className={s.img1} src={visa} alt="black" />
                        <h2 className={s.title_item}>Консьєрж-сервіс</h2>
                        <p className={s.item_descr}>
                          Діє по всьому світу цілодобово й надає для вас
                          глобальний сервіс інформаційної підтримки в
                          телефонному режимі
                        </p>
                        <a href="" className={s.link1}>
                          Подробнее >
                        </a>
                      </a>
                    </li>
                    <li className={s.item}>
                      <img className={s.img1} src={agoda} alt="agoda" />
                      <h2 className={s.title_item}>
                        Оренда готелю на agoda.com
                      </h2>
                      <p className={s.item_descr}>
                        Знижки у разі бронювання на agoda.com. Знижка 12 % в
                        більш ніж 985 тис. готелів по всьому світу
                      </p>
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

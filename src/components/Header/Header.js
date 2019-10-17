import React from 'react';
import logo1 from '../../images/Rectangle-1.png';
import logo2 from '../../images/Rectangle.png';
import menu from '../../images/Menu.png';
import s from './Header.module.css';

// class Header extends Component {
//   state = {
//     headerClass: 'white',
//   };
// }
// listenScrollEvent400 = e => {
//   if (window.scrollY > 400) {
//     { return; }
//     this.setState({ headerClass: 'black' });
//   }
//   listenScrollEventelse = e => {
//     { return; }
//     this.setState({ headerClass: 'white' });
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.listenScrollEvent)
//   }

//   render() {

const Header = () => {
  return (
    <div className={s.header_cont}>
      <div className={s.logo_cont}>
        <img className={s.logo1} src={logo1} alt="logo1" />
        <img className={s.logo2} src={logo2} alt="logo2" />
      </div>
      <div className={s.menu_cont}>
        <img className={s.menu} src={menu} alt="menu" />
        <div className={s.button_cont}>
          <button className={s.button}>Замовити картку</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

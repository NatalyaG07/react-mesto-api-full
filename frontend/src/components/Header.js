import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import '../index.css';
import logo from '../images/logo.svg';

function Header({ handleLogin, userEmail }) {

  function signOut() {
    localStorage.removeItem("jwt");
    handleLogin();
  }

  return(
    <header className="header">
        <img className="header__logo" src={logo} alt="Место" />
        <Switch>
          <Route exact path="/">
            <div className="header__info-box">
              <p className="header__user-mail">{userEmail}</p>
              <Link className="header__link-exit" to="/sign-in" onClick={signOut}>Выйти</Link>
            </div>
          </Route>
          <Route path="/sign-in">
            <Link className="header__link-exit header__link-exit_white" to="/sign-up">Регистрация</Link>
          </Route>
          <Route path="/sign-up">
            <Link className="header__link-exit header__link-exit_white" to="/sign-in">Войти</Link>
          </Route>
        </Switch>
    </header>
  )
}

export default Header;
import React, {  useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import '../index.css';
import * as auth from '../utils/Auth';

// import InfoTooltip from "./InfoTooltip";

function Register({ setServiceResponse, onInfoTooltipPopupOpen }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    auth.register(email, password).then((res) => {
      if(res){
        setServiceResponse(true);
        onInfoTooltipPopupOpen();
        history.push('/sign-in');
        resetForm();
      } else {
        onInfoTooltipPopupOpen();
      }
    })
    .catch((err) => {
      console.log(err);
      onInfoTooltipPopupOpen();
    });
  }

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  return(
    <div className="login" >
      <div className="login__content">
        <h2 className="login_title">Регистрация</h2>
        <form className="login__form" name="login" method="post" noValidate onSubmit={handleSubmit}>
          <input
            id="email-input"
            className="login__input"
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email || ''}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <label htmlFor="email-input"><span className="popup__error" id="email-input-error"></span></label>
          <input
            id="password-input"
            className="login__input"
            type="password"
            name="password"
            required minLength="6"
            maxLength="15"
            placeholder="Пароль"
            value={password || ''}
            onChange={(e) => { setPassword(e.target.value) }}
            />
          <label htmlFor="password-input"><span className="popup__error" id="password-input-error"></span></label>
          <button className="login__save " type="submit">Зарегистрироваться</button>
        </form>

        <div className="login__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="/sign-in" className="login__link">Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;
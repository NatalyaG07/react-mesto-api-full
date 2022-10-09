import React, {  useState } from 'react';
import { useHistory} from 'react-router-dom';
import * as auth from '../utils/Auth';
import '../index.css';

function Login({ handleLogin, onInfoTooltipPopupOpen, setUserEmail }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if(!email || !password) {
      return;
    }
    auth.authorize(email, password)
    .then((data) => {
      if(data.message) {
        onInfoTooltipPopupOpen();
        console.log(data.message);
      }
      
      if(data.token) {
        setEmail('');
        setPassword('');
        handleLogin();
        history.push("/");
        resetForm();
        setUserEmail(email);
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
        <h2 className="login_title">Вход</h2>
        <form className="login__form" name="login" method="post" noValidate onSubmit={handleSubmit}>
          <input
            id="email-input"
            className="login__input"
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email || ''}
            onChange={(e) => { setEmail(e.target.value)}}
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
            onChange={(e) => { setPassword(e.target.value)}}
            />
          <label htmlFor="password-input"><span className="popup__error" id="password-input-error"></span></label>
          <button className="login__save " type="submit">Войти</button>
        </form>
      </div>
  </div>
  )
}

export default Login;
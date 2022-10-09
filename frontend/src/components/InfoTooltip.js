import React from 'react';
import '../index.css';
import success from '../images/success.svg';
import error from '../images/error.svg';

function InfoTooltip({ isOpen, onClose, serviceResponse }) {
  return(
    <div className={`popup ${isOpen && 'popup_active'}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <img className="popup__infoTooltip-img" src={serviceResponse ? success : error} alt={serviceResponse ? 'Успех' : 'ошибка'} />
        <h2 className="popup__title">{serviceResponse ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;
import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete, link, name, likes }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner === currentUser._id;


  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `elements__remove ${isOwn ? 'elements__remove_active' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__like ${isLiked ? 'elements__like_active' : ''}`
  );

  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelite() {
    onCardDelete(card);
  }

  return(
    <article className="elements__iteam">
      <img className="elements__img" src={link} alt={name} onClick={handleImageClick} /> 
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleCardDelite}></button>
      <div className="elements__info">
        <h2 className="elements__title">{name}</h2>
        <div className="elements__like-group">
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
          <h3 className="elements__like-counter">{likes}</h3>
        </div>
      </div>
    </article>
  )
}

export default Card;


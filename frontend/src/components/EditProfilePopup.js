import {useEffect, useState, useContext} from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {

  const [name, setName] = useState('');
  const [description , setDescription] = useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm 
      name="edit-profile" 
      title="Редактировать профиль" 
      buttonText="Сохранить" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}>
        
        <input
          id="name-input"
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          value={name || ''}
          onChange={handleChangeName}
        />
        <label htmlFor="name-input"><span className="popup__error" id="name-input-error"></span></label>
        <input
          id="information-input"
          className="popup__input popup__input_type_information"
          type="text"
          name="information"
          required minLength="2"
          maxLength="200"
          placeholder="О себе"
          value={description || ''}
          onChange={handleChangeDescription}
          />
        <label htmlFor="information-input"><span className="popup__error" id="information-input-error"></span></label>
      </PopupWithForm>
  )
}

export default EditProfilePopup;
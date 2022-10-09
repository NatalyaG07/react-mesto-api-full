import {useEffect, useState} from 'react';
import '../index.css';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {

  const [title, setTitle] = useState('');
  const [link , setLink] = useState('');

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e){
    e.preventDefault();

    onAddPlace({
      name: title,
      link,
    });
  }

  useEffect (() => {  ///очищение инпутов при закрытии и открытии
    setTitle('');
    setLink('');
 },[isOpen]);

  return(
    <PopupWithForm 
      name="add-card" 
      title="Новое место"
      buttonText="Создать" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleAddPlaceSubmit}>
        <input
          id="title-input"
          className="popup__input popup__input_type_title"
          type="text"
          name="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" 
          value={title || ''}
          onChange={handleChangeTitle}
        />
        <label htmlFor="title-input"><span className="popup__error" id="title-input-error"></span></label>
        <input
          id="url-input"
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка"
          required 
          value={link || ''}
          onChange={handleChangeLink}
        />
        <label htmlFor="url-input"><span className="popup__error" id="url-input-error"></span></label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
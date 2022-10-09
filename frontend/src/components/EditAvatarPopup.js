import { useRef } from 'react';
import '../index.css';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {

  const inputRef = useRef(); // записываем объект, возвращаемый хуком, в переменную

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  
  return(
  <PopupWithForm 
    name="update_avatar" 
    title="Обновить аватар" 
    buttonText="Сохранить" 
    isOpen={isOpen} 
    onClose={onClose} 
    onSubmit={handleSubmit}>
      
      <input
        id="avatar-link"
        className="popup__input"
        type="url"
        name="link"
        placeholder="Ссылка"
        required 
        ref={inputRef}  // указали элементу атрибут ref => получили прямой доступ к DOM-элементу
      />
      <label htmlFor="avatar-link"><span className="popup__error" id="avatar-link-error"></span></label>
  </PopupWithForm>
  )
}

export default EditAvatarPopup;
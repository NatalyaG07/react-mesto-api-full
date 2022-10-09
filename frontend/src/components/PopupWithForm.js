import '../index.css';

function PopupWithForm({ isOpen, onClose, title, name, buttonText, onSubmit, children }) {
  return(
    <div className={`popup ${isOpen && 'popup_active'}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} method="post" noValidate onSubmit={onSubmit}>
          {children}
          <button className="popup__save popup__save_edit-profile" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
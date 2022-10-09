import '../index.css';

function ImagePopup({ card, onClose }) {
  return(
    <div className={`popup ${JSON.stringify(card) !== '{}' && 'popup_active'}`}>
      <div className="popup__group">
        <button className="popup__close popup__close_img-card" type="button" onClick={onClose}></button>
        <img className="popup__img" src={card.link} alt={card.name} />
          <h2 className="popup__img-name">{card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
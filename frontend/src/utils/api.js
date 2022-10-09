 class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //Загрузка информации о пользователе с сервера
  getUserInfo() { 
    return fetch(`${this._baseUrl}/users/me`, { 
      method: 'GET',
      headers: this._headers
    })

    .then(this._testStatus);
  };

  //Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })

    .then(this._testStatus); 
  };

  //Редактирование профиля
  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          about: data.about
        })
    })

    .then(this._testStatus);
  };

  //Добавление новой карточки
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })

    .then(this._testStatus); 
  };

  //Удаление карточки
  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })

    .then(this._testStatus); 
  };

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method:(isLiked ? 'PUT' : 'DELETE'),
      headers: this._headers,
    })

    .then(this._testStatus);
  };

  //Редактирование аватара
  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',  
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })

    .then(this._testStatus);
  };

  //Проверка на ошибку
  _testStatus(res) {
     if (res.ok) { 
      return res.json();
    }
      
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '0cca389c-2bfe-4c54-84e5-257b0da00bfb',
    'Content-Type': 'application/json'
  }
});
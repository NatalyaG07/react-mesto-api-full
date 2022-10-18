 class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //Загрузка информации о пользователе с сервера
  getUserInfo(token) { 
    return fetch(`${this._baseUrl}/users/me`, {
      // credentials: "include",
      method: 'GET',
      headers: {...this._headers, authorization: `Bearer ${token}`},
    })

    .then(this._testStatus);
  };

  //Загрузка карточек с сервера
  getInitialCards(token) {
    return fetch(`${this._baseUrl}/cards`, {
      // credentials: "include",
      method: 'GET',
      headers: {...this._headers, authorization: `Bearer ${token}`},
    })

    .then(this._testStatus); 
  };

  //Редактирование профиля
  editProfile(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      // credentials: "include",
      method: 'PATCH',
      headers: {...this._headers, authorization: `Bearer ${token}`},
      body: JSON.stringify({
          name: data.name,
          about: data.about
        })
    })

    .then(this._testStatus);
  };

  //Добавление новой карточки
  addCard(data, token) {
    return fetch(`${this._baseUrl}/cards`, {
      // credentials: "include",
      method: 'POST',
      headers: {...this._headers, authorization: `Bearer ${token}`},
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })

    .then(this._testStatus); 
  };

  //Удаление карточки
  removeCard(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      // credentials: "include",
      method: 'DELETE',
      headers: {...this._headers, authorization: `Bearer ${token}`},
    })

    .then(this._testStatus); 
  };

  changeLikeCardStatus(cardId, isLiked, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method:(isLiked ? 'PUT' : 'DELETE'),
      // credentials: "include",
      headers: {...this._headers, authorization: `Bearer ${token}`},
    })

    .then(this._testStatus);
  };

  //Редактирование аватара
  editAvatar(data, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',  
      // credentials: "include",
      headers: {...this._headers, authorization: `Bearer ${token}`},
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
  baseUrl: 'https://api.mesto.natalya.g.nomoredomains.icu',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
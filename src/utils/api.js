class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getApiResponse() {
    return res => {
      if (res.ok) {
        return res.json();
      }
    
      return Promise.reject(res.status);
    }
  }

  getUserInfo() {
    return fetch((`${this._baseUrl}/users/me`), {
      headers: this._headers
    })
      .then(this._getApiResponse())
  }

  getInitialCards() {
    return fetch((`${this._baseUrl}/cards`), {
      headers: this._headers
    })
    
      .then(this._getApiResponse())
  }

  editUserInfo({ name, about }) {
    return fetch((`${this._baseUrl}/users/me`), {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })

      .then(this._getApiResponse())
  }

  postNewCard({ name, link }) {
    return fetch((`${this._baseUrl}/cards`), {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    
      .then(this._getApiResponse())
  }

  removeCard(cardId) {
    return fetch((`${this._baseUrl}/cards/${cardId}`), {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getApiResponse())
  }

  changeLikeState(cardId, isLiked) {
    return fetch((`${this._baseUrl}/cards/${cardId}/likes`), {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers
    })

      .then(this._getApiResponse())
  }

  editProfilePicture({ avatar }) {
    return fetch((`${this._baseUrl}/users/me/avatar`), {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
    })
      
      .then(this._getApiResponse())
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'fd02c577-7116-45a1-8b27-78f599221dad',
    'Content-Type': 'application/json'
  }
});
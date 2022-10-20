class Api {
  constructor(baseUrl, authorization) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }
  _checkResponce(res) {
    if (res.ok) {
      const data = res.json();
      return data;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponce);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponce);
  }

  editProfile(formData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        about: formData.about,
      }),
    }).then(this._checkResponce);
  }

  deleteLike(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponce);
  }

  setLike(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponce);
  }

  changeLikeCardStatus(idCard, isLiked) {
    return isLiked ? this.setLike(idCard) : this.deleteLike(idCard);
  }

  addCard(formData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        link: formData.link,
      }),
    }).then(this._checkResponce);
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponce);
  }

  getInfoUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponce);
  }
}

export const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-49",
  "90f8d9a0-3583-4d46-8126-1c35c51fd02a"
);

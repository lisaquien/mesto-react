import React, {useState} from 'react';
import { api } from '../utils/api';
import Card from './Card';

export default function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      });
  }, [])
  

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <img className="profile__avatar" src={userAvatar} alt="Фото пользователя" onClick={onEditAvatar} />
          </div>
          <div className="profile__content">
            <div className="profile__description">
              <div className="profile__personal-info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__button profile__button_type_edit" onClick={onEditProfile} aria-label="Кнопка Редактировать профиль"></button>
              </div>
              <p className="profile__about">{userDescription}</p>
            </div>
            <button className="profile__button profile__button_type_add" onClick={onAddPlace} aria-label="Кнопка Добавить фото"></button>
          </div>
        </div>
      </section>
      <section className="elements">
        <ul className="cards">
          {cards.map(card => {
              return (<Card card={card} key={card._id} onCardClick={onCardClick} />)
            })
          }
        </ul>
      </section>
    </main>
  )
}
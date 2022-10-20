import React from "react";

export default function Card(props) {
  const { card, onCardClick } = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__panel">
        <p className="card__placename">{card.name}</p>
        <div className="card__like-container">
          <button className="card__button card__button_type_like" aria-label="Кнопка Лайк фото"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
        <button className="card__button card__button_type_remove" aria-label="Кнопка Удалить фото"></button>
      </div>
    </li>
  )
}
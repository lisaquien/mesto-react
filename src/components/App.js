import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(false);

  function changeStateForEditProfilePopup() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function changeStateForAddPlacePopup() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function changeStateForEditAvatarPopup() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={changeStateForEditAvatarPopup}
          onEditProfile={changeStateForEditProfilePopup}
          onAddPlace={changeStateForAddPlacePopup}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm name="change-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups}>
          <input type="url" id="avatar-input" className="form__input form__input_element_avatar" name="avatar" placeholder="Ссылка на картинку" required={true} />
          <span className="form__input-error avatar-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} >
          <input type="text" id="name-input" className="form__input form__input_element_name" name="name" minLength="2" maxLength="40" placeholder="Имя" required={true} />
          <span className="form__input-error name-input-error"></span>
          <input type="text" id="description-input" className="form__input form__input_element_about" name="about" minLength="2" maxLength="200" placeholder="Занятие" required={true} />
          <span className="form__input-error description-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups}>
          <input type="text" id="placename-input" className="form__input form__input_element_placename" name="name" placeholder="Название" minLength="2" maxLength="30" required={true} />
          <span className="form__input-error placename-input-error"></span>
          <input type="url" id="link-input" className="form__input form__input_element_link" name="link" placeholder="Ссылка на картинку" required={true} />
          <span className="form__input-error link-input-error"></span>
        </PopupWithForm>
        
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" isOpen={""} onClose={closeAllPopups}/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </>
  )
}
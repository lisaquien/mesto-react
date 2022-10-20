import React from "react";

export default function PopupWithForm(props) {
  const { name, title, children, buttonText, isOpen, onClose } = props;

  return(
    <div className={`popup popup_type_${name} ${isOpen}`}>
      <div className="popup__container">
        <button className="popup__close-icon" aria-label="Кнопка Закрыть" onClick={onClose}></button>
        <form className={`form form_type_${name}`} noValidate>
          <div className="form__content">
            <h2 className="form__title">{title}</h2>
            <fieldset className="form__fieldset">
              {children}
              <button className="form__button form__button_type_save" type="submit">{buttonText}</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  )
}
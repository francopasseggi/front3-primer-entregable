import React, { useState } from 'react';
import './Form.css';
import Card from './Card';

function Form() {
    const [name, setName] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [nameError, setNameError] = useState('');
    const [colorError, setColorError] = useState('');
    const [showCard, setShowCard] = useState(false);

    const validateName = () => {
        if (name.trim().length < 3) {
            setNameError('Please check the input data is correct');
        } else if (/\s/.test(name.charAt(0))) {
            setNameError('Please check the input data is correct');
        } else {
            setNameError('');
        }
    };

    const validateColor = () => {
        if (favoriteColor.trim().length < 6) {
            setColorError('Please check the input data is correct');
        } else {
            setColorError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateName();
        validateColor();
        if (!nameError && !colorError) {
            setShowCard(true);
        }
    };

    return (
        <>
            {showCard ? (
                <Card name={name} favoriteColor={favoriteColor} />
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            className="form__input"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            onBlur={validateName}
                        />
                    </label>
                    {nameError && <span className="form__error">{nameError}</span>}
                    <br />
                    <label>
                        Favorite color:
                        <input
                            type="text"
                            className="form__input"
                            value={favoriteColor}
                            onChange={(event) => setFavoriteColor(event.target.value)}
                            onBlur={validateColor}
                        />
                    </label>
                    {colorError && <span className="form__error">{colorError}</span>}
                    <br />
                    <button className="form__button" type="submit">Submit</button>
                </form>
            )}
        </>
    );
}

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    let superTryunfo;

    if (hasTrunfo) {
      superTryunfo = (
        <p>
          Você já tem um Super Trunfo em seu baralho
        </p>);
    } else {
      superTryunfo = (
        <label htmlFor="tryunfo">
          Super Trybe Trunfo
          <input
            id="tryunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="trunfo"
          />
        </label>
      );
    }

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            maxLength="210"
          />
        </label>

        <label htmlFor="attr1">
          Ataque
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Defesa
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Agilidade
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="attr3"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            id="image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {superTryunfo}

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="isSaveButtonDisabled"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;

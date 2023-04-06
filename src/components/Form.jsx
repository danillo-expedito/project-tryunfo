import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input id="name" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea id="description" data-testid="description-input" />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="img-src">
          Imagem
          <input id="img-src" type="text" data-testid="image-input" />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select id="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="tryunfo">
          Super Trybe Trunfo
          <input id="tryunfo" type="checkbox" data-testid="trunfo-input" />
        </label>

        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;

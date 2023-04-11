import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'Normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  handleError() {
    const { name, description, attr1, attr2, attr3,
      image, rarity } = this.state;

    const attrMax = 90;
    const attrMaxSum = 210;
    let exceeded = false;

    if ((parseFloat(attr1) + parseFloat(attr2) + parseFloat(attr3)) > attrMaxSum) {
      exceeded = true;
    }

    const errorCases = [
      !name.length,
      !description.length,
      !image.length,
      !rarity.length,
      attr1 > attrMax,
      attr2 > attrMax,
      attr3 > attrMax,
      attr1 < 0,
      attr2 < 0,
      attr3 < 0,
      exceeded,
    ];

    const fullfilled = errorCases.every((error) => error !== true);

    this.setState({
      isSaveButtonDisabled: !fullfilled,
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleError);
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { name, description, attr1, attr2, attr3,
      image, rarity, trunfo } = this.state;

    const card = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
    };

    if (trunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));

    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'Normal',
      trunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { name, description, attr1, attr2, attr3,
      image, rarity, trunfo, isSaveButtonDisabled, hasTrunfo, cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        {cards.map((card) => (
          <Card
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
            key={ card.name }
          />
        ))}
      </div>
    );
  }
}

//
export default App;

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    let rarity;

    switch (cardRare) {
    case 'normal':
      rarity = <p>&#11088; &#9733; &#9733;</p>;
      break;
    case 'raro':
      rarity = <p>&#11088; &#11088; &#9733;</p>;
      break;
    case 'muito raro':
      rarity = <p>&#11088; &#11088; &#11088;</p>;
      break;
    default:
      rarity = '';
    }

    return (
      <card>
        <div className="card-name">
          <h3 data-testid="name-card">{cardName}</h3>
          <p data-testid="rare-card" className="hidden">{cardRare}</p>
          {rarity}
        </div>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <section className="description">
          <h6>Descrição:</h6>
          <p data-testid="description-card">
            {cardDescription}
          </p>
        </section>
        <section className="attributes">
          <div className="att-name">
            <p>ATT</p>
            <div data-testid="attr1-card" className="att">
              {cardAttr1}
            </div>
          </div>
          <div className="att-name">
            <p>DEF</p>
            <div data-testid="attr2-card" className="att">
              {cardAttr2}
            </div>
          </div>
          <div className="att-name">
            <p>AGI</p>
            <div data-testid="attr3-card" className="att">
              {cardAttr3}
            </div>
          </div>
        </section>
        {cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}
      </card>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;

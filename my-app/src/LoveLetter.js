import React from 'react';
import './LoveLetter.css'; // Import your CSS file for styling
import heartLogo from './heart.png'; // Import your heart image

class LoveLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleHeart = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="love-letter-container">
        <div className={`letter ${isOpen ? 'open' : ''}`}>
          <p>Dear Beloved,</p>
          <p>Just wanted to say...</p>
          <div className="heart" onClick={this.toggleHeart}>
            {isOpen && <img src={heartLogo} alt="Heart" className="heart-image" />}
            {isOpen && <p className="message">I love you!</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default LoveLetter;

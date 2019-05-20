import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Link } from 'rebass';

const IconButton = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby')

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state
    return (
      <div>
        <IconButton type="button" onClick={this.openModal}>
          <FontAwesome name="envelope" />
        </IconButton>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button type="button" onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

            <input type="hidden" name="bot-field" />

            <div className="field half first">
              <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" required />
              </label>
            </div>
            <div className="field half">
              <label htmlFor="email">
                Email
                <input type="text" name="email" id="email" required />
              </label>
            </div>
            <div className="field">
              <label htmlFor="message">
                Message
                <textarea name="message" id="message" rows="6" required />
              </label>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>

        </Modal>
      </div>
    );
  }
}


export default Contact;
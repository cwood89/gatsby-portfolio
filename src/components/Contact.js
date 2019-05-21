import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import Form from './Form'

const IconButton = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const customStyles = {

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    width: '40vw',
    position: 'absolute',
    margin: 'auto',
    border: '2px solid #162CC6',
    background: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
};

Modal.setAppElement('#___gatsby')

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state
    return (
      <>
        <Tooltip title="Contact Me" position="bottom" trigger="mouseenter">
          <IconButton type="button" onClick={this.openModal}>
            <FontAwesome name="envelope" />
          </IconButton>
        </Tooltip>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Contact Form"
        >
          <h2>Say Hey</h2>
          <Form />

        </Modal>
      </>
    );
  }
}


export default Contact;
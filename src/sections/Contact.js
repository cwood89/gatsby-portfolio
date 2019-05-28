import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal";
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import Form from '../components/Form';
import Section from '../components/Section';

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    webkitBoxShadow: '0px 13px 26px 0px rgba(0,0,0,0.7)',
    boxShadow: '0px 13px 26px 0px rgba(0,0,0,0.7)',
    width: '40vw',
    position: 'absolute',
    margin: 'auto',
    border: 'none',
    borderRadius: '8px',
    background: '#FFFFFF',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
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
          <Section.Header name="Contact Me" icon="✉️" label="person" />
          <h3>Im looking for any opportunity to learn and grow as a developer.</h3>
          <Form />

        </Modal>
      </>
    );
  }
}


export default Contact;
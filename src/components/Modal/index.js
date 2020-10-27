import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export const SimpleModal = ({title, body, isHtml, show, onClose}) => {
    return (
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ isHtml ?
        <div dangerouslySetInnerHTML={{ __html: body }} />
        :
        body
        }</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmationModal({ show, onClose, onSave}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body>Anda yakin ingin menyimpan data ini?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={onSave}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
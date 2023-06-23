import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmationDelete({ show, onClose, onDelete}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body>Anda yakin ingin menghapus data ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={onDelete}>
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationDelete;
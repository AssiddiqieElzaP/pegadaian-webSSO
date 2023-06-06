import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ApprovalMessage({ show, onClose, onSave }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Konfirmasi Simpan Data</Modal.Title> */}
      </Modal.Header>
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

export default ApprovalMessage;
import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import Header from "../../../component/navbar/header";

import axios from "axios";


function AddBackup() {
  const [data, setData] = useState({
   nik: "",
   nama_pegawai: "",
   jabatan: "",
   unit_kerja: "",
   user_id_bkp: "",
  })
  const handleKey = (Event) => {
    if (Event.key === "Enter") {
        try {
          axios.post("http://172.168.102.91:8080/api/v1/backup/nik",{
            nik : data.nik
          })
            .then((res) => {
              console.log(res.data);
              setData({
               nik : res.data.data.nik,
               nama_pegawai : res.data.data.nama_pegawai,
               jabatan: res.data.data.jabatan,
               unit_kerja: res.data.data.unit_kerja,
               user_id_bkp: res.data.data.user_id_bkp
            });
            });
        } catch (error) {
          console.error(error);
        }
    }
  };
//   console.log(data.data.name)
  return (
    <Container className="m-0 p-0">
      <Header heading="PENDAFTARAN USER BACKUP" />
      <div className="mt-2">
        <h6 className="mx-3 mb-2">Detail Pegawai yang ditambahkan</h6>
        <div className="px-3">
          <Card
            border="secondary"
            style={{ width: "100%", height: "auto" }}
            className="mx-auto"
          >
            <Card.Body>
              <Form >
                <Form.Group className="mb-2" controlId="nik">
                  <Form.Label className="mb-0">NIK *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Nik Lalu tekan Enter"
                    style={{ height: "30px", fontSize: "14px" }}
                    name="nik"
                    onChange={(e) => setData({ ...data, nik: e.target.value })}
                    onKeyDown={handleKey}
                  />
                  <Form.Text className="text-muted">
                    <p className="d-none">
                      *NIK tidak ditemukan / sudah terdaftar*
                    </p>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2" controlid="name">
                  <Form.Label className="mb-0">Nama</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ height: "30px", fontSize: "14px" }}
                    disabled
                    name="name"
                    placeholder="Nama Pegawai"
                    value={data.nama_pegawai !== "" ? data.nama_pegawai : "" }
                  />
                </Form.Group> 
                <Form.Group className="mb-2" controlid="name">
                  <Form.Label className="mb-0">Jabatan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Kode Jabatan - Nama Jabatan"
                    style={{ height: "30px", fontSize: "14px" }}
                    disabled
                    value={data.jabatan!== "" ? data.jabatan : "Nama Pegawai" }
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlid="formBasicEmail">
                  <Form.Label className="mb-0">Unit Kerja</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Kode Unit - Nama Unit"
                    style={{ height: "30px", fontSize: "14px" }}
                    disabled
                    name="text"
                    value={data.unit_kerja !== "" ? data.unit_kerja : "" }
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlid="formBasicEmail">
                  <Form.Label className="mb-0">User ID Backup</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Generate NIK - BKP"
                    style={{ height: "30px", fontSize: "14px" }}
                    disabled
                    value={data.user_id_bkp!== "" ? data.user_id_bkp : "Nama Pegawai" }
                  />
                </Form.Group>
              </Form>
              <div className="d-flex">
                <button className="mt-3 btn-color mx-3">Simpan</button>
                <button className="mt-3 btn-color mx-3">Batal</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default AddBackup;

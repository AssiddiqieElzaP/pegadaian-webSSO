import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Header from "../../../component/navbar/header";
import SidebarMenu from "../../../component/sidebar/sidebar";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { v4 as uuid } from "uuid";
// import PegawaiData from "../../../component/table/PegawaiData";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";
import Tabs from "../../../component/tabs/Tabs";

function AddBackup() {
  // const [nik, setNik] = useState("");
  // const [userIdBackup, setUserIdBackup] = useState("");
  // const [name, setName] = useState("");
  // const [jabatan, setJabatan] = useState("");
  // const [unitKerja, setUnitKerja] = useState("");
  // // const [jenisBackup, setJenisBackup] = useState('')
  // // const [status, setStatus] = useState('')

  // const [validated, setValidated] = useState(false);

  // let history = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const ids = uuid();
  //   let uniqeId = ids.slice(0, 8);

  //   let a = nik,
  //     b = userIdBackup,
  //     c = name,
  //     d = jabatan,
  //     f = unitKerja;

  //   PegawaiData.push({
  //     id: uniqeId,
  //     NIK: a,
  //     UserIdBackup: b,
  //     Name: c,
  //     Jabatan: d,
  //     UnitKerja: f,
  //   });

  //   history("/dashboard");

  //   const form = e.currentTarget;

  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();

  const [data, setData] = useState({
    nik: "",
    nama_pegawai: "",
    jabatan: "",
    unit_kerja: "",
    user_id_bkp: "",
    user_id: "",
  });

  const saveData = (e) => {
    e.preventDefault();

    const insert = {
      user_id: data.user_id,
      uid_bkp: data.user_id_bkp,
      name: data.nama_pegawai,
      created_by: localStorage.getItem("name"),
      updated_by: localStorage.getItem("name"),
    };

    axios
      .post("http://10.87.10.123:8080/api/v1/backup/create", insert)
      .then((res) => {
        alert(res.data.message);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     axios.post("http://10.87.10.123:8080/api/v1/backup/create")
  //   } catch (error) {

  //   }
  // }

  const handleKey = (Event) => {
    if (Event.key === "Enter") {
      try {
        axios
          .post("http://10.87.10.123:8080/api/v1/backup/nik", {
            nik: data.nik,
          })
          .then((res) => {
            console.log(res.data);
            setData({
              user_id: res.data.data.user_id,
              nik: res.data.data.nik,
              nama_pegawai: res.data.data.nama_pegawai,
              jabatan: res.data.data.jabatan,
              unit_kerja: res.data.data.unit_kerja,
              user_id_bkp: res.data.data.user_id_bkp,
            });
          });
      } catch (error) {
        console.error(error);
      }
    }

    // setValidated(true);
  };

  //   const [data, setData] = useState({
  //     nik: "",
  //     nama_pegawai: "",
  //     jabatan: "",
  //     unit_kerja: "",
  //     user_id_bkp: "",
  //   });
  //   const handleKey = (Event) => {
  //     if (Event.key === "Enter") {
  //         try {
  //           axios.post("http://172.168.102.91:8080/api/v1/backup/nik",{
  //             nik : data.nik
  //           })
  //             .then((res) => {
  //               console.log(res.data);
  //               setData({
  //                nik : res.data.data.nik,
  //                nama_pegawai : res.data.data.nama_pegawai,
  //                jabatan: res.data.data.jabatan,
  //                unit_kerja: res.data.data.unit_kerja,
  //                user_id_bkp: res.data.data.user_id_bkp
  //             });
  //             });
  //         } catch (error) {
  //           console.error(error);
  //         }
  //     }
  //   };
  //   console.log(data.data.name)

  return (
    <>
      <div className="d-flex" style={{ height: "125vh" }}>
        <Container className="m-0 p-0">
          <div className="mt-2">
            <h6 className="mx-3 mb-2">Detail Pegawai yang ditambahkan</h6>
            <div className="px-3">
              <Card
                border="secondary"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto"
              >
                <Card.Body>
                  <Form
                  // noValidate
                  // validated={validated}
                  // onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-2" controlId="nik">
                      <Form.Label className="mb-0">NIK *</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Masukkan Nik Lalu tekan Enter"
                        style={{ height: "30px", fontSize: "14px" }}
                        name="nik"
                        required
                        // onChange={(e) => setNik(e.target.value)}
                        onChange={(e) =>
                          setData({ ...data, nik: e.target.value })
                        }
                        onKeyDown={handleKey}
                      />
                      <Form.Control.Feedback>
                        NIK sudah sesuai
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        NIK Tidak DItemukan.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2" controlid="name">
                      <Form.Label className="mb-0">Nama</Form.Label>
                      <Form.Control
                        type="text"
                        style={{ height: "30px", fontSize: "14px" }}
                        disabled
                        required
                        name="name"
                        placeholder="Nama Pegawai"
                        // onChange={(e) => setName(e.target.value)}
                        value={
                          data.nama_pegawai !== "" ? data.nama_pegawai : ""
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlid="name">
                      <Form.Label className="mb-0">Jabatan</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Kode Jabatan - Nama Jabatan"
                        style={{ height: "30px", fontSize: "14px" }}
                        disabled
                        required
                        // onChange={(e) => setJabatan(e.target.value)}
                        value={
                          data.jabatan !== "" ? data.jabatan : "Nama Pegawai"
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlid="formBasicEmail">
                      <Form.Label className="mb-0">Unit Kerja</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Kode Unit - Nama Unit"
                        style={{ height: "30px", fontSize: "14px" }}
                        disabled
                        required
                        name="text"
                        // onChange={(e) => setUnitKerja(e.target.value)}
                        value={data.unit_kerja !== "" ? data.unit_kerja : ""}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlid="UserIdBackup">
                      <Form.Label className="mb-0">User ID Backup</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="Generate NIK"
                          style={{ height: "30px", fontSize: "14px" }}
                          required
                          // onChange={(e) =>
                          //   setUserIdBackup(e.target.value + " - BKP")
                          // }
                          disabled
                          value={
                            data.user_id_bkp !== ""
                              ? data.user_id_bkp
                              : "Nama Pegawai"
                          }
                        />
                        <InputGroup.Text
                          id="inputGroupPrepend"
                          style={{ height: "30px", fontSize: "14px" }}
                          defaultValue={"BKP"}
                        >
                          BKP
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Form>
                  <div className="d-flex">
                    <button
                      className="mt-3 btn-color mx-3"
                      onClick={(e) => saveData(e)}
                      type="submit"
                    >
                      Simpan
                    </button>
                    <button className="mt-3 btn-color mx-3">Batal</button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
        
      </div>
    </>
  );
}

export default AddBackup;

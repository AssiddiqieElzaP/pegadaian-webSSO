import React, { useState } from "react";
import { Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
// import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import axios from "axios";
import { async } from "q";
import { addBusinessDays, isWeekend } from "date-fns";


function GantiBackup() {
    const [data, setData] = useState({
        nik: ""
      });
    const [dataGanti,setDataGanti] = useState({
      nik:""
    })
      const [replace, setReplace] = useState({
        unit_kerja: "",
        group_backup: "",
        keterangan: "",
        durasi_backup: "",
        tanggal_backup: "",
      });

      
      const handleKey = (Event) => {
        if (Event.key === "Enter") {
          try {
            axios
              .post("http://localhost:8081/api/v1/change-backup/nik", {
                nik: data.nik,
              })
              .then((res) => {
                setData({
                  user_id: res.data.data.user_id,
                  nik: res.data.data.nik,
                  nama_pegawai: res.data.data.nama_pegawai,
                  jabatan: res.data.data.jabatan,
                  kode_jabatan: res.data.data.kode_jabatan,
                  unit_kerja: res.data.data.unit_kerja,
                  kode_unit_kerja: res.data.data.kode_unit_kerja,
                  user_id_bkp: res.data.data.user_id_bkp,
                });
              })
              console.log('data Succes')
          } catch (error) {
            console.error(error);
          }
        }
      };

      const handleKeyGanti = (Event) =>{
        
        if(Event.key === "Enter" ){
          try {
            axios
              .post("http://localhost:8081/api/v1/change-backup/nik", {
                nik: dataGanti.nik,
              })
              .then((res) => {
                setDataGanti({
                  user_id: res.data.data.user_id,
                  nik: res.data.data.nik,
                  nama_pegawai: res.data.data.nama_pegawai,
                  jabatan: res.data.data.jabatan,
                  kode_jabatan: res.data.data.kode_jabatan,
                  unit_kerja: res.data.data.unit_kerja,
                  kode_unit_kerja: res.data.data.kode_unit_kerja,
                });
              })
              console.log('data Succes')
              console.log(dataGanti)
          } catch (error) {
            console.error(error);
          }
        }
      }

// setting duration agar tanggal otomatis ke pilih
const [selectedDate, setSelectedDate] = useState("");

  const handleChangeDurasi = (event) => {
    const duration =  event.target.value;
    setSelectedDate(duration);
    calculateEndDate(dateStart, duration);
  };
  const calculateEndDate = (startDate, duration) => {
    const durationInDays = parseInt(duration, 10);
    if (startDate && !isNaN(durationInDays)) {
      const calculatedEndDate = addBusinessDays(startDate, durationInDays);
      setDateEnd(calculatedEndDate);
    } else {
      setDateEnd(null);
    }
  };
// akhir setting duration

// setting tanggal
const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const handleStartDateChange = (date) => {
    setDateStart(date);
    calculateEndDate(dateStart, selectedDate);

  };
  //akhir setting tanggal
      // const validated = () => {
      //   let result = true;
      //   if (data.nik === "" || data.nik === null) {
      //     result = false;
      //     toast.warning("Nik Tidak Boleh Kosong");
      //   }
      //   if (
      //     replace.unit_kerja === "" ||
      //     (replace.unit_kerja === null && replace.group_backup === "") ||
      //     (replace.group_backup === null && replace.keterangan === "") ||
      //     (replace.keterangan === null && replace.durasi_backup === "") ||
      //     (replace.durasi_backup === null && replace.tanggal_backup === "") ||
      //     replace.tanggal_backup === null
      //   ) {
      //     result = false;
      //     toast.warning(
      //       "Data yang di masukkan belum lengkap, Silahkan lengkapi data!!"
      //     );
      //   }
      //   return result;
      // };
  return (
   <>
   <Container className="mx-auto p-0">
        <Card className="mx-3 my-2" border="dark">
          <Form className="mx-3 py-3 px-3">
            <Row className="mb-3">
              <Form.Group as={Col} controlid="nik">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nik Pegawai lalu tekan enter"
                  name="nik"
                  onChange={(e) => setData({ ...data, nik: e.target.value })}
                  onKeyDown={handleKey}
                />
              </Form.Group>
              <Form.Group as={Col} controlid="nik">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nik Pegawai lalu tekan enter"
                  name="nik"
                  onChange={(e) => setDataGanti({ ...dataGanti, nik: e.target.value })}
                  onKeyDown={handleKeyGanti}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="nama">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Pegawai" disabled 
                value={data.nama_pegawai !== "" ? data.nama_pegawai : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="nama">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Pegawai" disabled 
                value={dataGanti.nama_pegawai !== "" ? dataGanti.nama_pegawai : ""}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="unitkerja">
                <Form.Label className="mb-0 ms-1">Unit Kerja</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Unit - Unit Kerja"
                  disabled
                  value={
                    data.kode_unit_kerja && data.unit_kerja !== ""
                      ? data.kode_unit_kerja && data.unit_kerja
                      : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlid="unitkerja">
                <Form.Label className="mb-0 ms-1">Unit Kerja</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Unit - Unit Kerja"
                  disabled
                  value={
                    dataGanti.kode_unit_kerja && dataGanti.unit_kerja !== ""
                      ? dataGanti.kode_unit_kerja && dataGanti.unit_kerja
                      : ""
                  }
                />
              </Form.Group>

             
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="jabatan">
                <Form.Label className="mb-0 ms-1">Jabatan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  disabled
                  value={
                    data.kode_jabatan && data.jabatan !== ""
                      ? data.kode_jabatan && data.jabatan
                      : ""
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlid="jabatan">
                <Form.Label className="mb-0 ms-1">Jabatan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Jabatan - Nama Jabatan"
                  disabled
                  value={
                    dataGanti.kode_jabatan && dataGanti.jabatan !== ""
                      ? dataGanti.kode_jabatan && dataGanti.jabatan
                      : ""
                  }
                />
              </Form.Group>

              
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="user_id">
                <Form.Label className="mb-0 ms-1">User ID Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Generate NIKBKP"
                  disabled
                  value={data.user_id_bkp !== "" ? data.user_id_bkp : ""}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">Tanggal Mulai</Form.Label>
                    <DatePicker
                      name="start_date"
                      selected={dateStart}
                      filterDate={(date) => !isWeekend(date)}
                      dateFormat="dd MMM yyyy"
                      minDate={new Date()}
                      onChange={handleStartDateChange}
                      className={"form-control form-control-sm"}
                     

                      // onChange={(e)=>setReplace({...replace,tanggal_backup:e.target.value})}
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mb-0 ms-1">Tanggal Akhir</Form.Label>
                    <DatePicker
                      name="end_date"
                      selected={dateEnd}
                      filterDate={(date) => !isWeekend(date)}
                      dateFormat="dd MMM yyyy"
                      className={"form-control form-control-sm"}
                      value={dateEnd ? dateEnd.toDateString() : ""}
                      disabled
                      placeholderText="pilih durasi"

                      // onChange={(e)=>setReplace({...replace,tanggal_backup:e.target.value})}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
               <Form.Label className="mb-0 ms-1">Durasi Backup</Form.Label>
                <Form.Select
                  style={{ fontSize: "12px" }}
                  // onChange={(e) =>
                  //   setReplace({ ...replace, durasi_backup: e.target.value })
                  // }
                  onChange={handleChangeDurasi}
                  value={selectedDate}
                  name="duration"
                >
                  <option>Pilih lama hari backup</option>
                  <option value="0">1 Hari</option>
                  <option value="1">2 Hari</option>
                  <option value="2">3 Hari</option>
                </Form.Select>
              </Form.Group>
              
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
              </Form.Group>

              <Form.Group as={Col} controlid="backup">
                <Form.Label className="mb-0 ms-1">Keterangan Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alasan Backup"
                />
              </Form.Group>
               
            </Row>
          </Form>
            <div className="d-flex  mt-2 mb-3 me-3" >
              <button className="btn-color me-2" type="sumbit" style={{float:'right', display:'block',margin:'auto'}}>
                Simpan
              </button>
              <button className="btn-color ms-3 me-3">Batal</button>
            </div>
        </Card>
      </Container>
   </>
  )
}

export default GantiBackup
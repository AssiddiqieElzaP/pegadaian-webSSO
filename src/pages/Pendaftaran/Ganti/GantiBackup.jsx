import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
// import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import axios from "axios";
// import { async } from "q";
import { addBusinessDays, isWeekend } from "date-fns";
import FooterWeb from "../../../component/footer/FooterWeb";
import Confirmasi from '../../../component/modal/Confirmasi'

function GantiBackup() {
    const [data, setData] = useState({
        nik: ""
      });
    const [dataGanti,setDataGanti] = useState({
      nik:""
    })

    
  
      //validasi modal untuk informasi
      const [showConfirmation, setShowConfirmation] = useState(false);
      
      const handleKey = (Event) => {
        if (Event.key === "Enter") {
          try {
            axios
              .post("http://localhost:8080/api/v1/change-backup/nik", {
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
              .post("http://localhost:8080/api/v1/change-backup/nik", {
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
      // untuk tugas insert (simpan database)
      const [formData, setFormData] = useState({
        description:""
      });
    
      const handleDecription = (event) =>{
        const{name,value} = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name] : value
        }))
      }
    
      const [alertMessage, setAlertMessage] = useState('');
      const handleClear = () => {
        setData({
          user_id: "",
          nik: "",
          nama_pegawai: "",
          jabatan: "",
          kode_jabatan: "",
          unit_kerja: "",
          kode_unit_kerja: "",
          user_id_bkp: ""
        });
        setDataGanti({
          user_id: "",
          nik: "",
          nama_pegawai: "",
          jabatan: "",
          kode_jabatan: "",
          unit_kerja: "",
          kode_unit_kerja: ""
        });
        setDateStart('')
        setDateEnd('')
      };
      const handleSave = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        const insert = {
          user_id: data.user_id,
          user_need_backup_id: dataGanti.user_id,
          uidBkp: data.user_id_bkp,
          duration: parseInt(selectedDate),
          start_date: dateStart,
          end_date: dateEnd,
          description: formData.description,
          created_by: localStorage.getItem("name"),
          updated_by: localStorage.getItem("name"),
         
        };

        try {
          const response = await axios.post('http://localhost:8080/api/v1/change-backup/save', insert);
          setAlertMessage('Data tersimpan');
          console.log('data tersimpan',response.data); 
          // Optional: Handle the server response
        } catch (error) {
          setAlertMessage('Error submitting data!');
          console.error('data tidak tersimpan',error);
        }
        //dialog konfirmasi batal
        setShowConfirmation(false);
        setValidated(true);
      };

      // validasi

      const [validated, setValidated] = useState(false);
  return (
   <>
   <Container className="mx-auto p-0">
        <Card className="mx-3 my-2" border="dark">
        {alertMessage && <div className="text-center">{alertMessage}</div>}
          <Form className="mx-3 py-3 px-3" onSubmit={handleSave} noValidate validated={validated}>
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
                  value={data.nik}
                
                />
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
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
                  value={dataGanti.nik}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="nama">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Pegawai" disabled 
                // value={data.nama_pegawai !== "" ? data.nama_pegawai : ""}
                value={data.nama_pegawai}
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
                  onChange={handleDecription}
                  name="description"
                  value={formData.description}
                />
              </Form.Group>
               
            </Row>
          </Form>
            <div className="d-flex  mt-2 mb-3 me-3" >
              <button className="btn-color me-2" type="sumbit" 
              style={{float:'right', display:'block',margin:'auto'}}
              onClick={() => setShowConfirmation(true)}
              >
                Simpan
              </button>
              <button className="btn-color ms-3 me-3" onClick={handleClear}>Batal</button>
            </div>
             {/* Komponen Dialog Konfirmasi */}
      <Confirmasi
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onSave={handleSave}
      />
        </Card>
        <FooterWeb />
      </Container>
   </>
  )
}

export default GantiBackup
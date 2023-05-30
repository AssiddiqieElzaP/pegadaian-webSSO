import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import { addBusinessDays, isWeekend } from "date-fns";
import './TambahUser.css'
function TambahUser() {
  const [data, setData] = useState({
    nik: "",
  });

  const [selectedUnit, setSelectedUnit] = useState("");

  const [unit, setUnit] = useState({
    id: "",
    groupId: "",
    workUnitName: "",
    workUnitCode: "",
  });

  //ini ketika kita memilih dropdown untuk di targetkan
  const pilihUnitKerja = (event) => {
    const selectedValue =  event.target.value;
    setSelectedUnit(selectedValue);
    Click(selectedValue);
  };

  const Click = async (value) => {
    if (value == null) {
      return <option>Kode Group - Nama Group</option>;
    } else {
      try {
        await axios
          .get(`http://localhost:8081/api/v1/backup/group?id=${value}`)
          .then((res) => {
            const testgroup = res.data;
            setMygroup(testgroup);
            // console.log(testgroup)
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8081/api/v1/backup/work-unit")
          .then((res) => {
            const test = res.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setUnit(test);
            // console.log(test)
          });
      } catch (error) {}
    };
    fetchData();
  }, []);


  const [mygroup, setMygroup] = useState({});
  const handleKey = (Event) => {
    if (Event.key === "Enter") {
      try {
        axios
          .post("http://localhost:8081/api/v1/backup/nik", {
            nik: data.nik,
          })
          .then((res) => {
            // console.log(res.data);
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
          });
          console.log('data Succes')
      } catch (error) {
        console.error(error);
      }
    }
  };

  
 
  const handleSave = async (e) => {
    e.preventDefault();
    const insert = {
      uid_bkp: data.user_id_bkp,
      created_by: localStorage.getItem("name"),
      updated_by: localStorage.getItem("name"),
      
    };
    try {
      const response = await axios.post('http://localhost:8081/api/v1/backup/create', insert);
      console.log('data tersimpan',response.data); // Optional: Handle the server response
    } catch (error) {
      console.error('data tidak tersimpan',error);
    }
  };
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);

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

  const handleStartDateChange = (date) => {
    setDateStart(date);
    calculateEndDate(dateStart, selectedDate);

  };

  return (
    <>
      <Container className="mx-auto p-0">
        <Card className="mx-3 my-2" border="dark">
          <Form className="mx-3 py-3 px-3" onSubmit={handleSave}>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="nik">
                <Form.Label className="mb-0 ms-1">
                  Nik Pegawai<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nik Pegawai lalu tekan enter"
                  onKeyDown={handleKey}
                  name="nik"
                  onChange={(e) => setData({ ...data, nik: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Row>
                  <Col>
                    <Form.Label className="mb-0 ms-1">
                      Unit Kerja Backup
                    </Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      value={selectedUnit}
                      onChange={pilihUnitKerja}
                    >
                      <option>Kode Group - Nama Group</option>
                      {unit?.data?.map((list) => (
                        <option
                          name="work_unit_id"
                          key={list.id}
                          value={list.id}
                          
                        >
                          {list.workUnitCode}-{list.workUnitName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="mb-0 ms-1">Group Backup</Form.Label>
                    <Form.Select
                      style={{ fontSize: "12px" }}
                      // onChange={(e) =>
                      //   setReplace({ ...replace, group_backup: e.target.value })
                      // }
                    >
                      <option>Kode Group - Nama Group</option>

                      {mygroup?.data?.map((g) => (
                        <option name="group_id" key={g.id}>
                          {g.groupCode}-{g.groupName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlid="">
                <Form.Label className="mb-0 ms-1">Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Pegawai"
                  disabled
                  name="nama_pegawai"
                  value={data.nama_pegawai !== "" ? data.nama_pegawai : ""}
                  
                />
              </Form.Group>

              <Form.Group as={Col} controlid="backup">
                <Form.Label className="mb-0 ms-1">Keterangan Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alasan Backup"
                  name="description"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="mb-0 ms-1">Unit Kerja</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kode Unit - Unit Kerja"
                  disabled
                  name="kode_unit"
                  value={
                    data.kode_unit_kerja && data.unit_kerja !== ""
                      ? data.kode_unit_kerja && data.unit_kerja
                      : ""
                  }
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

              <Form.Group as={Col}>
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

              {/* <Form.Group as={Col} controlid="tanggal">
                <Form.Label className="mb-0 ms-1">
                  Tanggal Mulai - Akhir Backup
                </Form.Label>
                <DatePicker
                  id="dateStartEnd"
                  selectsRange={true}
                  minDate={new Date()}
                  startDate={dateStart}
                  endDate={dateEnd}
                  // excludeDates={[new Date(), addDays(new Date(), -1), addDays(new Date(), -2)]}
                  filterDate={(date) => !isWeekend(date)}
                  onChange={onChangeHandler}
                  dateFormat="dd MMM yyyy"
                  className={"form-control form-control-sm"}
                  showDisabledMonthNavigation
                  // onChange={(e)=>setReplace({...replace,tanggal_backup:e.target.value})}
                />
              </Form.Group> */}
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="mb-0 ms-1">User ID Backup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Generate NIKBKP"
                  disabled
                  value={data.user_id_bkp !== "" ? data.user_id_bkp : ""}
                  name="uid_bkp"
                />
              </Form.Group>

              <Form.Group as={Col}></Form.Group>
            </Row>
          </Form>
          <div className="d-flex  mb-3 ">
            <button className="btn-color me-2 group_button" type="sumbit" onClick={(e) => handleSave(e)}>
              Simpan
            </button>
            <button className="btn-color me-5">Batal</button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default TambahUser;

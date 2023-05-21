import React from "react";
import { Table } from "react-bootstrap";

// import axios from "axios";
import PegawaiData from "./PegawaiData";
import { Link } from "react-router-dom";
function TablefromAdd() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <div className="mx-auto px-3 mt-3">
        <h6 className="mx-3 mb-3">Hasil Pencarian</h6>
        <Table responsive="sm" border="secondary" style={{ fontSize: "14px" }}>
          <thead style={{ fontSize: "14px" }}>
            <tr>
              <th>NIK</th>
              <th>USER ID BACKUP</th>
              <th>NAMA PEGAWAI</th>
              <th>JABATAN</th>
              <th>UNIT KERJA</th>
              <th>JENIS BACKUP</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {PegawaiData && PegawaiData.length > 0
              ? PegawaiData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.NIK}</td>
                      <td>{item.UserIdBackup}</td>
                      <td>{item.Name}</td>
                      <td>{item.Jabatan}</td>
                      <td>{item.UnitKerja}</td>
                      <td>{item.JenisBackup}</td>
                      <td>{item.Status}</td>
                    </tr>
                  );
                })
              : "Data not Available"}
          </tbody>
        </Table>
        <div>
          <Link to={"/add-backup"} style={{textDecoration:'none', display:'flex', justifyContent:'end'}}>
            <button className="btn-color">Tambah</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TablefromAdd;

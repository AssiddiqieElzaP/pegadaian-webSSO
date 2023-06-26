import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    // <div style={{ display: "flex", height: "100vh" }} className="mx-auto">
      <Sidebar className="sidebar p-1" style={{height:'95vh'}}>
        <Menu className="p-2">
          <MenuItem component={<Link to="/pengajuan"/>}  className="btn-sidebar"> Pengajuan User Backup</MenuItem>
          <MenuItem component={<Link to="/persetujuan"/>} className="btn-sidebar" > Persetujuan User Backup</MenuItem>
        </Menu>
      </Sidebar>
    // </div>
  );
};
export default SidebarMenu;

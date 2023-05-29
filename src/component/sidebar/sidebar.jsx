import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    // <div style={{ display: "flex", height: "100vh" }} className="mx-auto">
      <Sidebar className="sidebar p-1" style={{minHeight:"100%"}}>
        <Menu className="p-2">
          <SubMenu label="PENGAJUAN" className="btn-sidebar">
            <MenuItem component={<Link to="/add-backup"/>}> Pengajuan Baru </MenuItem>
            <MenuItem component={<Link to="/approval"/>}> Persetujuan </MenuItem>
          </SubMenu>
          <SubMenu label="ADMIN" className="btn-sidebar">
            <MenuItem component={<Link to="/role-matrix"/>}> User Role Matrix </MenuItem>
            <MenuItem component={<Link to="/user-backup"/>}> Data User Backup </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    // </div>
  );
};
export default SidebarMenu;
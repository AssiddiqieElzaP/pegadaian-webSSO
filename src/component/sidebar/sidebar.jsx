import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    // <div style={{ display: "flex", height: "100vh" }} className="mx-auto">
    <Sidebar className="sidebar p-1" style={{ height: "95vh" }}>
      <Menu className="p-2">
        <SubMenu
          label="PENGAJUAN"
          style={{
            background: "#20A94D",
            fontWeight: "500",
            marginBottom: "5px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <MenuItem component={<Link to="/add-backup" />}>
            Pengajuan Baru
          </MenuItem>
          <MenuItem component={<Link to="/approval" />}>Persetujuan</MenuItem>
        </SubMenu>
        <SubMenu
          label="ADMIN"
          style={{
            background: "#20A94D",
            fontWeight: "500",
            marginBottom: "5px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <MenuItem component={<Link to="/role-matrix" />}>
            User Role Matrix
          </MenuItem>
          <MenuItem component={<Link to="/user-backup" />}>
            Data User Backup
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
    // </div>
  );
};
export default SidebarMenu;

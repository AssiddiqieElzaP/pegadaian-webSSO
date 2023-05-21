import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div style={{ display: "flex", height: "100%" }} className="">
      <Sidebar className="sidebar p-1 mt-3">
        <Menu className="p-2">
          <SubMenu label="PENDAFTARAN" className="btn-sidebar">
            <MenuItem component={<Link to="/add-backup"/>}> Penambahan </MenuItem>
            <MenuItem component={<Link to="/register-backup"/>}> Pergantian </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/approval"/>} className="btn-sidebar"> PERSETUJUAN </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SidebarMenu;
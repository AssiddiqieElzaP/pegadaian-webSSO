import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="sidebar p-1">
        <Menu className="p-2">
          <SubMenu label="PENDAFTARAN" className="btn-sidebar">
            <MenuItem component={<Link to="/"/>}> Penambahan </MenuItem>
            <MenuItem component={<Link to="/replacedRegister"/>}> Pergantian </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/approval"/>} className="btn-sidebar"> PERSETUJUAN </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SidebarMenu;
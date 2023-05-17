import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarMenu = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="sidebar p-1">
        <Menu className="p-2">
          <SubMenu label="PENDAFTARAN" className="btn-sidebar">
            <MenuItem> Penambahan </MenuItem>
            <MenuItem> Pergantian </MenuItem>
          </SubMenu>
          <MenuItem className="btn-sidebar"> CEK PERSETUJUAN </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SidebarMenu;
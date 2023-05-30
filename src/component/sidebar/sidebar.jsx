import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    // <div style={{ display: "flex", height: "100vh" }} className="mx-auto">
      <Sidebar className="sidebar p-1" style={{minHeight:"100%"}}>
        <Menu className="p-2">
        
          <MenuItem component={<Link to="/dashboard"/>} className="btn-sidebar" style={{color: 'white'}}> DASHBOARD </MenuItem>
        
          <SubMenu label="PENGAJUAN" className="btn-sidebar" style={{color: 'white'}}>
            <MenuItem component={<Link to="/add-backup"/>} > Pengajuan Baru </MenuItem>
            <MenuItem component={<Link to="/register-backup"/>}> Persetujuan </MenuItem>
          </SubMenu>
          {/* <MenuItem component={<Link to="/approval"/>} className="btn-sidebar"> PERSETUJUAN </MenuItem> */}
        </Menu>
      </Sidebar>
    // </div>
  );
};
export default SidebarMenu;
import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import CustomTable from '../components/Tables/CustomTable';

interface Role {
  id: string;
  username: string;
  Rolename: string;
  permissions: string[];
}

interface Column<T> {
  ID: string;
  Header: string;
  accessor: keyof T;
  Cell?: (row: T) => React.ReactNode;
}

const Roles = () => {
  const { isSidebarOpen } = useSidebar();

  const roleColumns: Column<Role>[] = [
    { ID: 'Id', Header: 'ID', accessor: 'id' },
    { ID: 'Username', Header: 'Username', accessor: 'username' },
    { ID: 'Role Name', Header: 'Role Name', accessor: 'Rolename' },
    {
      ID: 'Permissions',
      Header: 'Permissions',
      accessor: 'permissions',
      Cell: (role) => <span>{role.permissions.join(', ')}</span>,
    },
  ];

  const rolesData: Role[] = [
    { id: '1', username: 'Malarmus', Rolename: 'Admin', permissions: ['READ', 'WRITE', 'DELETE'] },
    { id: '2', username: 'doheris', Rolename: 'User', permissions: ['READ'] },
  ];

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Roles</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Roles</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>
        <a href="!#" className="btn-download">
          <i className="ri-arrow-down-double-fill"></i>
          <span className="text">Download PDF</span>
        </a>
      </div>

      <div className="table-data">
        <CustomTable data={rolesData} columns={roleColumns} />
      </div>
    </main>
  );
};

export default Roles;

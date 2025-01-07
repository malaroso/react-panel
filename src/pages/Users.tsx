// Users.tsx
import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import CustomTable from '../components/Tables/CustomTable'; // Özel tablo bileşenini içe aktar

// Kullanıcı tipi tanımı
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string; // Avatar alanı ekleniyor
}

interface Column<T> {
  ID: string;
  Header: string;
  accessor: keyof T;
  Cell?: (row: T) => React.ReactNode;
}

// Örnek kullanıcı verileri
const usersData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', avatar: 'assets/avatars/300-1.jpg' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/300-2.jpg' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', avatar: 'assets/avatars/300-3.jpg' },
  // Diğer kullanıcılar...
];

const roleColumns: Column<User>[] = [
  { ID: 'Id', Header: 'ID', accessor: 'id' },
  { 
    ID: 'avatar', 
    Header: 'Avatar', 
    accessor: 'avatar', 
    Cell: ({ avatar }: User) => <img src={avatar} alt="User Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> 
  },
  { ID: 'name', Header: 'Name', accessor: 'name' },
  { ID: 'email', Header: 'Email', accessor: 'email' },
  { ID: 'role', Header: 'Role', accessor: 'role' },
];



const Users = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Kullanıcılar</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Kullanıcılar</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Ana Sayfa</a>
            </li>
          </ul>
        </div>
        <a href="!#" className="btn-download">
          <i className="ri-arrow-down-double-fill"></i>
          <span className="text">PDF İndir</span>
        </a>
      </div>

      <div className="table-data">
        <CustomTable data={usersData} columns={roleColumns} />
      </div>
      <div className="clear"></div>
    </main>
  );
};

export default Users;

import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import UsersTable from '../components/Tables/UsersTable';
import WalletBoxes from '../components/wallet/WalletBoxes';
import CustomTable from '../components/Tables/CustomTable';

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

// Güncellenmiş işlem verileri
const transactionsData = [
  { id: 1, date: '2023-10-01', type: 'Alışveriş', amount: '$50', description: 'Market alışverişi', status: 'Tamamlandı' },
  { id: 2, date: '2023-10-02', type: 'Fatura', amount: '$100', description: 'Elektrik faturası', status: 'Beklemede' },
  { id: 3, date: '2023-10-03', type: 'Transfer', amount: '$200', description: 'Arkadaşa transfer', status: 'Tamamlandı' },
  { id: 4, date: '2023-10-04', type: 'Yemek', amount: '$30', description: 'Restoran', status: 'Tamamlandı' },
  { id: 5, date: '2023-10-05', type: 'Kira', amount: '$500', description: 'Aylık kira', status: 'Beklemede' },
  // Diğer işlemler...
];

const transactionColumns: Column<typeof transactionsData[0]>[] = [
  { ID: 'Id', Header: 'ID', accessor: 'id' },
  { ID: 'date', Header: 'Tarih', accessor: 'date' },
  { ID: 'type', Header: 'Tür', accessor: 'type' },
  { ID: 'amount', Header: 'Tutar', accessor: 'amount' },
  { ID: 'description', Header: 'Açıklama', accessor: 'description' },
  { ID: 'status', Header: 'Durum', accessor: 'status' },
];

const Wallet = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Wallet</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Wallet</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>
      </div>

      <WalletBoxes />
      <div className="table-data">
        <CustomTable data={transactionsData} columns={transactionColumns} />
      </div>

    </main>
  );
};

export default Wallet;

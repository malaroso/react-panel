import React, { useState } from 'react';
import { motion } from "framer-motion";


interface Column<T> {
  Header: string;
  accessor: keyof T;
  Cell?: (row: T) => React.ReactNode; // Özel hücre içeriği
}

const CustomTable = <T extends object>({ data, columns }: { data: T[]; columns: Column<T>[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<keyof T>(columns[0].accessor);

  const sortedData = [...data].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSort = (field: keyof T) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <motion.div className="order" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <div className="head">
        <i className="bx ri-search-line" onClick={() => setShowSearchInput(!showSearchInput)} style={{ cursor: 'pointer' }}></i>
        <input
          type="text"
          placeholder="Ara..."
          value={searchTerm}
          className='table-search-input'
          onChange={e => setSearchTerm(e.target.value)}
          style={{ display: showSearchInput ? 'block' : 'none' }}
        />
        <i className="bx ri-filter-line"></i>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.accessor as string} onClick={() => handleSort(column.accessor)} style={{ cursor: 'pointer' }}>
                {column.Header} {sortField === column.accessor && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.accessor as string}>
                  {column.Cell ? column.Cell(item) : item[column.accessor]?.toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default CustomTable;

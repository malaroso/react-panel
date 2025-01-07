import { motion } from "framer-motion";

const Table = () => {
  return (
        <motion.div className="order" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx ri-search-line"></i>
            <i className="bx ri-filter-line"></i>

          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <img src="assets/avatars/300-1.jpg" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>
                    <img src="assets/avatars/300-2.jpg" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                    <img src="assets/avatars/300-3.jpg" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status process">Process</span></td>
              </tr>
              <tr>
                <td>
                    <img src="assets/avatars/300-4.jpg" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                    <img src="assets/avatars/300-5.jpg" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </motion.div>
  )
}

export default Table

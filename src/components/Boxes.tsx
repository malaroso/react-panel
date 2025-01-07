import { motion } from "framer-motion";

const Boxes = () => {

    return (
        <motion.div initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <ul className="box-info">
                <li>
                    <i className="bx ri-record-mail-line"></i>
                    <span className="text">
                        <h3>1020</h3>
                        <p>New Order</p>
                    </span>
                </li>
                <li>
                    <i className="bx ri-group-line"></i>
                    <span className="text">
                        <h3>2834</h3>
                        <p>Visitors</p>
                    </span>
                </li>
                <li>
                    <i className="bx ri-exchange-dollar-line"></i>
                    <span className="text">
                        <h3>$2543</h3>
                        <p>Total Sales</p>
                    </span>
                </li>
            </ul>
        </motion.div>
      
    )

}


export default Boxes;
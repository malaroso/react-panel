import { motion } from "framer-motion";

const WalletBoxes = () => {

    return (
        <motion.div initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <ul className="box-info">
                <li>
                    <i className="bx ri-wallet-line"></i>
                    <span className="text">
                        <h3>$2543</h3>
                        <p>My Wallet</p>
                    </span>
                </li>
                <li>
                    <i className="bx ri-exchange-dollar-line"></i>
                    <span className="text">
                        <h3>1020</h3>
                        <p>My Transactions</p>
                    </span>
                </li>
                <li>
                    <i className="bx ri-bank-card-line"></i>
                    <span className="text">
                        <h3>$2543</h3>
                        <p>Total Sales</p>
                    </span>
                </li>
            </ul>
        </motion.div>
      
    )

}


export default WalletBoxes;
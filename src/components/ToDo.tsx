import { motion } from "framer-motion";

const ToDo = () => {
    return (
        <motion.div   className="todo" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <div className="head">
                    <h3>Todos</h3>
                    <i className="bx ri-search-line"></i>
                    <i className="bx ri-filter-line"></i>
                </div>
                <ul className="todo-list">
                    <li className="completed">
                        <p>Todo List</p>
                        <i className="bx ri-todo-line"></i>
                    </li>
                    <li className="completed">
                        <p>Todo List</p>
                        <i className="bx ri-todo-line"></i>
                    </li>
                    <li className="not-completed">
                        <p>Todo List</p>
                        <i className="bx ri-todo-line"></i>
                    </li>
                    <li className="completed">
                        <p>Todo List</p>
                        <i className="bx ri-todo-line"></i>
                    </li>
                    <li className="not-completed">
                        <p>Todo List</p>
                        <i className="bx ri-todo-line"></i>
                    </li>
                </ul>
        </motion.div>
    )
}

export default ToDo

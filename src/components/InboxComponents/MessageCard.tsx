import React from 'react';
import { motion } from "framer-motion";

type MessageCardProps = {
    sender: any;
    title: any;
    date: any;
    image: any;
    // excerpt: any;
    onClick: () => void;
}


const MessageCard: React.FC<MessageCardProps> = ({ sender, title, image ,date, onClick }) => {
    return (
        <motion.div className="message-card" onClick={onClick} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="message-info">
                <div className="message-meta-with-images">
                    <img src={`assets/avatars/${image}`} alt=''></img>
                    <h3 className="message-title">{title}</h3>
                </div>
             
                {/* <p className="message-excerpt">{excerpt}</p> */}
                <div className="message-meta">
                    <span className="message-sender">{sender}</span>
                    <span className="message-date">{date}</span>
                </div>
            </div>
        </motion.div>

        
    );
};

export default MessageCard;

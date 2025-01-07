import React, { useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import MessageCard from '../components/InboxComponents/MessageCard';
import { motion } from "framer-motion";

interface Message {
  sender: string;
  title: string;
  date: string;
  image: any;
  // excerpt: string;
  content: string;
}


const Inbox: React.FC = () => {
  const { isSidebarOpen } = useSidebar();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const messages: Message[] = [
    {
      sender: 'John Doe',
      title: 'Meeting Reminder',
      date: '2024-09-28',
      image: '300-19.jpg',
      content: 'Here are the details of the meeting...'
    },
    {
      sender: 'Jane Smith',
      title: 'Project Update',
      date: '2024-09-27',
      image: '300-20.jpg',
      content: 'The project is on track to be completed by the end of the month.'
    },
    {
      sender: 'Customer Support',
      title: 'Support Ticket #12345',
      date: '2024-09-26',
      image: '300-21.jpg',
      content: 'Your support ticket has been resolved. Please review the details.'
    },
    {
      sender: 'Jane Smith',
      title: 'Project Update',
      date: '2024-09-27',
      image: '300-22.jpg',
      content: 'The project is on track to be completed by the end of the month. Your support ticket has been resolved. Please review the details'
    },
    {
      sender: 'Customer Support',
      title: 'Support Ticket #12345',
      date: '2024-09-26',
      image: '300-23.jpg',
      content: 'Your support ticket has been resolved. Please review the details. The project is on track to be completed by the end of the month .'
    }

  ];

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Inbox</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Inbox</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="inbox-container">

          {/* <h4 className='inboxHead'>Inbox</h4> */}
          <div className="message-list">
            {messages.map((msg, index) => (
              <MessageCard
                key={index}
                sender={msg.sender}
                image={msg.image}
                date={msg.date}
                title={msg.title}
                onClick={() => handleSelectMessage(msg)}
              />
            ))}
     
        </div>


        <motion.div className="message-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {selectedMessage ? (
            <div className="content-container">
              <div className='content-header'>
                <img className='content-image' src={`assets/avatars/${selectedMessage.image}`} alt=''></img>
                <div> 
                  <h2>{selectedMessage.title}</h2>
                  <p className="author"><strong>From:</strong> {selectedMessage.sender}</p>
                </div>
              </div>
              <div className="message-body">{selectedMessage.content}</div>
              <div>
                <p className="date" >Date <br /> <strong>{selectedMessage.date}</strong></p>
              </div>
            </div>
          ) : (
            <p style={{textAlign: 'center'}}>Mesaj içeriği için listeden bir mesaj seçin.</p>
          )}
        </motion.div>


      </div>
    </main>
  );
};

export default Inbox;
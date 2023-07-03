import React from 'react';
import chatbox from '../../images/icons/live-chat.png'
import hifi from '../../images/icons/hifi.png'

function ChatBox() {
    const openForm = () => {
      document.getElementById('myForm').style.display = 'block';
    };
  
    const closeForm = () => {
      document.getElementById('myForm').style.display = 'none';
    };
  
    return (
      <div className="chat-box">
        <button className="open-button" onClick={openForm}>
          <img src={chatbox} width="35" height="30" alt="Chatbox" />
        </button>
  
        <div className="chat-popup" id="myForm">
          <form action="" className="form-container">
            <i className="fa-solid fa-chalkboard-user"></i>
            <div>
              <h2 className="hi-text">
                Hi there
              </h2>
            </div>
  
            <label htmlFor="msg">Welcome to our website. Ask us anything</label>
            <textarea placeholder="Type message.." name="msg" required></textarea>
            <button type="submit" className="btn">Send</button>
            <button type="button" className="btn cancel" onClick={closeForm}>
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
  export default ChatBox;
  
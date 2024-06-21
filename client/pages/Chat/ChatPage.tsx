import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { io } from 'socket.io-client';
import Sidebar from '../../src/components/Chat/components/Sidebar';
import MessageBlock from '../../src/components/Chat/components/MessageBlock';
import Bodychat from '../../src/components/Chat/components/Bodychat';

function Chat({}): JSX.Element {
  // socket io
  const socket = io('http://localhost:5000');

  // получаем сообщения
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    socket.on('response', (data) => setMessages([...messages, data]));
  }, [messages, socket]);

  useEffect(() => {
    socket.on('responseTyping', (data) => {
      setStatus(data);
      setTimeout(() => setStatus(''), 2000);
    });
  }, [socket]);

  return (
    <Row>
      <Col span={18} push={6}>
        <Bodychat messages={messages} status={status} />
        <MessageBlock socket={socket} />
      </Col>
      <Col span={6} pull={18}>
        <Sidebar socket={socket} />
      </Col>
    </Row>
  );
}

export default Chat;

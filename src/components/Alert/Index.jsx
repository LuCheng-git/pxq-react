import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Alert = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        style={{width:'80px',height:'80px'}}
        visible={isModalVisible}
        onOk={handleOk}
        cancelText='取消'
        okText='确认'
        onCancel={handleCancel}
      >
        <p style={{fontSize:'26px',textAlign:'center'}}>请输入金额</p>     
      </Modal>
    </>
  );
}



export default Alert;
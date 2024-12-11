import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeMenu = () => {
 
  const menuUrl = `${window.location.origin}/menu`; 
  console.log('Generated QR Code URL:', menuUrl); 

  return (
    <div>
      <h1>Scan to View Menu</h1>
      
      <QRCodeCanvas 
        value={menuUrl} 
        size={200} 
        bgColor="#ffffff" 
        fgColor="#000000" 
      />
    </div>
  );
};

export default QRCodeMenu;

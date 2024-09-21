import React, { useState } from 'react';

function App() {
  const [level, setLevel] = useState(0); 
  const [size, setSize] = useState(100); 
  const feedPig = (increase) => {
    const newLevel = level + increase;
    setLevel(newLevel);
    setSize(size + increase * 2);
  };

  const reset = () => {
    setLevel(0); 
    setSize(100); 
  };
  const getImageForLevel = () => {
    if (level > 99) {
      return 'https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/385861631_122093758778071775_2342946183872957318_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHuBpgJek_P8J6i_0SJ0MtiaSepx_-4C7xpJ6nH_7gLvC4E0P-Y-vwtZ1sEMQdFam_d1SfiYheG9qq_2ai6Cgs6&_nc_ohc=4Y-zOx75clsQ7kNvgFHQMq4&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AGk3YMoyjdXMBWrQ8Xys3Yy&oh=00_AYDTRfGk2k4n4Orj0V6aFE6ChuuwXuOKtvebvem5O42Ozg&oe=66F41818'; // รูปภาพตัวเองเมื่อเลเวลเกิน 100
    } else {
      return 'https://media.komchadluek.net/uploads/images/contents/w1024/2024/09/y6vXsYTlIoUlV9DVH7ok.webp?x-image-process=style/lg-webp';
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>เกมส์เลี้ยงหมูเด้ง</h1>
      <h2>Level: {level}</h2>
      <div style={{ marginTop: '20px' }}>
        <img
          src={getImageForLevel()}
          alt="moo_deng"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => feedPig(5)} style={{ marginRight: '10px' }}>
        <p>ป้อนแตงโม (+5)</p> 
        <img src="https://mineblocks.com/1/wiki/images/1/19/Melon.png"width={100} alt="" />
        </button>

        <button onClick={() => feedPig(10)} style={{ marginRight: '10px' }}>
         <p>ป้อนฟักทอง (+10)</p> 
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXjcofWkRcSxwZcC60ouM5tk7HG3I2TCHBA&s"width={100} alt="" />
        </button>
        
        <button onClick={() => feedPig(20)}>
          <p>ป้อนหญ้า (+20)</p>
          <img src="https://art.pixilart.com/af9aa34a2234.png"width={100} alt="" />
        </button>
      </div>

      {/* ปุ่มรีเซ็ต */}
      <button onClick={reset} style={{ marginTop: '20px', padding: '10px 20px' }}>
        รีเซ็ตเลเวล
      </button>
      

    </div>
  );
  
}

export default App;

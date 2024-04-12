import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carasel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img  className="d-block w-100" src="https://i.pinimg.com/736x/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg" alt=""/>
          <Carousel.Caption>
            <h3>đêm nay ăn gì ?</h3>
            <p>Cột sống em là, em là em là cô gái miền tay</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  className="d-block w-100" src="https://i.pinimg.com/736x/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg" alt=""/>
          <Carousel.Caption>
            <h3>Sự kiên ăn sáng</h3>
            <p>Đêm nay ah sẽ làm tất cả về em</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  className="d-block w-100" src="https://i.pinimg.com/736x/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg" alt=""/>
          <Carousel.Caption>
            <h3>Sự kiện tết</h3>
            <p>
              các bạn sẽ có thể làm được mọi thứ
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carasel;

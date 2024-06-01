import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startYear = 2020;
  const startMonth = 6;
  const startDay = 14;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const totalSeconds = Math.floor(
        (currentDate - new Date(startYear, startMonth - 1, startDay)) / 1000
      );
      const newYears = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
      const newMonths = Math.floor(
        (totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
      );
      const newDays = Math.floor(
        ((totalSeconds % (365 * 24 * 60 * 60)) % (30 * 24 * 60 * 60)) /
          (24 * 60 * 60)
      );
      const newHours = Math.floor(
        (((totalSeconds % (365 * 24 * 60 * 60)) % (30 * 24 * 60 * 60)) %
          (24 * 60 * 60)) /
          (60 * 60)
      );
      const newMinutes = Math.floor(
        ((((totalSeconds % (365 * 24 * 60 * 60)) % (30 * 24 * 60 * 60)) %
          (24 * 60 * 60)) %
          (60 * 60)) /
          60
      );
      const newSeconds = Math.floor(
        ((((totalSeconds % (365 * 24 * 60 * 60)) % (30 * 24 * 60 * 60)) %
          (24 * 60 * 60)) %
          (60 * 60)) %
          60
      );

      setYears(newYears);
      setMonths(newMonths);
      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
        <div className="snowflake">Love</div>
      </div>

      <div className="box">
        <h3 className="title-box">Đã yêu em</h3>
        <h3>
          {" "}
          <span> {years}</span> năm: <span> {months}</span> tháng :{" "}
          <span>{days}</span> ngày
        </h3>
        <h3>
          {hours}:{minutes}:{seconds}
        </h3>
        <div className="name-double">
          <div>
            <img src="/IMG_00472.JPG" alt="" className="img-love" />
            <div>Nguyễn Đình Mạnh Quân</div>
          </div>
          <img src="/trai_tim.png" alt="" />
          <div>
            <img src="/IMG_0007.JPG" alt="" className="img-love"/>
            <div>Hồ Thu Nguyệt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./Statistic.scss";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
export default function Statistic() {
  let [listHeThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderRap = () => {
    return listHeThongRap.map((rap, index) => {
      return (
        <dd className={`percentage percentage-${index + 50}`} key={index}>
          <span className="text">
            {rap.tenHeThongRap}
            <img
              src={rap.logo}
              style={{ width: 41, height: 41 }}
              alt={rap.logo}
            />
          </span>
        </dd>
        
      );
    });
  };
  return (
    <dl>
      <dt>Thống kê người tiêu dùng trong năm 2021</dt>
      {renderRap()}
    </dl>
  );
}

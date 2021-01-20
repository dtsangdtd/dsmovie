import React, { useState, useEffect, Fragment } from 'react';
import { qLyPhimService } from '../../../services/QuanLyPhimServices';
export default function TheaterSystem(props) {
  let [rap, setRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setRap(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderHeThongRap = () => {
    return rap.map((rap, index) => {
      return (
        <a
          className='nav-link'
          id='v-pills-home-tab'
          data-toggle='pill'
          href={`#${rap.maHeThongRap}`}
          role='tab'
          aria-controls='v-pills-home'
          key={index}
        >
          <img src={rap.logo} alt={rap.maHeThongRap} />
        </a>
      );
    });
  };
  return <Fragment>{renderHeThongRap()}</Fragment>;
}

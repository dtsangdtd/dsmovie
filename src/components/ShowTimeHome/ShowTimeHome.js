import React from 'react';
import './ShowTimeHome.scss';
import TheaterSystem from './TheaterSystem/TheaterSystem';
import TheaterCluster from './TheaterCluster/TheaterCluster';
export default function ShowTimeHome() {
  return (
    <section id='schedule' className='schedule'>
      <div className='schedule__content'>
        <div className='container'>
          <h1 className='schedule__title text-center'>Lịch Chiếu</h1>
          <div className='schedule__row row bg-light'>
            <div className='main__tab col-2'>
              <div
                className='nav flex-column nav-pills'
                role='tablist'
                aria-orientation='vertical'
              >
                <TheaterSystem />
              </div>
            </div>
            <div className='main__tabContent col-md-10 col-sm-12'>
              <div className='tab-content' id='v-pills-tabContent'>
                <TheaterCluster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

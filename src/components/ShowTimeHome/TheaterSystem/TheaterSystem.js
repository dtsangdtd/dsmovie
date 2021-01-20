import React, { Fragment } from "react";
export default function TheaterSystem(props) {
  function renderClassActive(index) {
    if (index === 0) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  }

  let { heThongRap } = props;
  const renderHeThongRap = () => {
    return heThongRap?.map((rap, index) => {
      return (
        <a
          className={renderClassActive(index)}
          id="v-pills-home-tab"
          data-toggle="pill"
          href={`#${rap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          key={index}
        >
          <img src={rap.logo} alt={rap.maHeThongRap} />
        </a>
      );
    });
  };
  return <Fragment>{renderHeThongRap()}</Fragment>;
}

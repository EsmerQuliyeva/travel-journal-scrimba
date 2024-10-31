import React from "react";
import { CiLocationOn } from "react-icons/ci";
const Main = ({ data }) => {
  console.log({ data });
  return (
    <div className="travel-journal-content">
      <div className="left-part">
        <img src={data.image} alt={data.image} />
      </div>
      <div className="right-part">
        <div className="location-part">
          <CiLocationOn className="icon" />
          <span>{data.location}</span>
          <a href={data.googleMapsUrl}>View on Google maps</a>
        </div>
        <h2>{data.title}</h2>
        <p className="date">
          {data.startDate}-{data.endDate}
        </p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
};

export default Main;

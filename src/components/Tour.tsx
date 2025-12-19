import React from "react";

interface TourProps {
  img: string;
  date: string;
  title: string;
  info: string;
  duration: number;
  location: string;
  price: number;
}

const Tour = ({
  img,
  date,
  title,
  info,
  duration,
  location,
  price,
}: TourProps) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;

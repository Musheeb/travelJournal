import "./Main.css";

function Main({
  image,
  country,
  locationLink,
  locationName,
  timestamp,
  description,
}) {
  return (
    <div className="main-card">
      <img src={image} alt="" />
      <div className="main-card-content">
        <span className="main-card-location">
          <i className="fa-solid fa-location-dot main-card-location-icon"></i>
          <span className="main-card-destination">{country}</span>
          <span>
            <a href={locationLink} className="main-card-destination-link">
              View on Google Maps
            </a>
          </span>
        </span>
        <h2 className="main-card-location-name">{locationName}</h2>
        <span className="main-card-timestamp">{timestamp}</span>
        <p className="main-card-description">{description}</p>
      </div>
    </div>
  );
}

export default Main;

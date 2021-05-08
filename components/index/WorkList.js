export default function WorkList({ title, tech, picture }) {
  return (
    <div className="portfolio-div">
      <div className="profile-img">
        <img src={picture}></img>
      </div>
      <div className="profile-detail">
        <h2>{title}</h2>
        {tech &&
          tech.map((c) => {
            return <b key={c}>{c}</b>;
          })}
      </div>
      <div className="profile-btn">
        <div>See more...</div>
      </div>
    </div>
  );
}

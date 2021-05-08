export default function Contactlist({
  ico,
  text,
  bg,
  bd,
  bgimg,
  transitionclass,
}) {
  return (
    <div
      className={`contact-div ${transitionclass}`}
      style={{ background: bg, borderRadius: bd, backgroundImage: bgimg }}
    >
      <div
        className="contact-icon"
        style={{ backgroundColor: "#ffffff", borderRadius: bd }}
      >
        <i className={ico} style={{ color: bg }}></i>
      </div>
      <h2>{text}</h2>
    </div>
  );
}

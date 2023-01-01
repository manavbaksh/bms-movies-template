import "./ContentCard.css";

function ContentCard({ src, title, language, id, setSelectedCardInfo }) {
  let defaultImgSrc = "/images/bookmyshow.png";

  return (
    <div className="card-wrapper">
      <img
        src={src}
        alt={title}
        className="poster"
        onClick={() => {
          window.scrollTo(0, 0);
          setSelectedCardInfo(id);
        }}
        onError={(error) => {
          error.target.src = defaultImgSrc;
        }}
      />
      <span className="title">{title}</span>
      <span className="language">{language}</span>
    </div>
  );
}

export default ContentCard;

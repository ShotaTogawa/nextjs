const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail__image" />
      <h3>{caption}</h3>
    </div>
  );
};

export default Thumbnail;

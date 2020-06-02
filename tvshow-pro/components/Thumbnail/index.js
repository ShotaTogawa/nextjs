import ThumbnailStyles from './styles';

const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail__image" />
      <h3 className="thumbnail__caption">{caption}</h3>

      <style jsx>{ThumbnailStyles}</style>

      {/* <style jsx>{`
        .thumbnail__image {
          width: 100%;
        }

        .thumbnail__caption {
          text-align: center;
        }
      `}</style> */}
    </div>
  );
};

export default Thumbnail;

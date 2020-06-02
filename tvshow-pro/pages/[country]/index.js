import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({ shows, country }) => {
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;
      return (
        <li key={index}>
          <Thumbnail
            imageUrl={(show.image && show.image.medium) || undefined}
            caption={show.name}
            href="/[country]/[showId]"
            as={`/${country}/${show.id}`}
          />
        </li>
      );
    });
  };
  return (
    <div className="home">
      <ul className="tvshows-grid">{renderShows()}</ul>
      <style jsx>{`
        .tvshows-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

// こっちが最初に実行され、returnが返り次第画面描画される
Home.getInitialProps = async (context) => {
  console.log(context);
  const country = context.query.country || 'us';
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );
  return {
    shows: response.data,
    country,
  };
};
export default Home;

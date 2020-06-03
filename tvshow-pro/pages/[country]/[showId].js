import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Error from 'next/error';
// ファイル名は_errorでないいけない
import CustomError from '../_error';

const ShowDetail = ({ show = {}, statusCode }) => {
  const { name, image, summary, _embedded } = show;

  if (statusCode) {
    return (
      <CustomError
        statusCode={statusCode}
        title="Oops! There was a problem here"
      />
    );
  }

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>
      <h1>{name}</h1>
      {parse(summary)}
      {_embedded.cast.length > 0 ? <Cast cast={_embedded.cast} /> : ''}
      <style jsx>{`
        .show-details__poster {
          height: 200px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

ShowDetail.getInitialProps = async ({ query }) => {
  try {
    const { showId } = query;
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
    return {
      show: response.data,
    };
  } catch (e) {
    return {
      statusCode: e.response ? e.response.status : 500,
    };
  }
};

export default ShowDetail;

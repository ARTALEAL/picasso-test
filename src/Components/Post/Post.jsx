import postApi from '../../utils/api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './post.css';
import history from 'history/browser';

const Post = () => {
  const location = useLocation();
  const query = location.pathname.split('/');
  const id = query[query.length - 1];

  const { data: post } = postApi.useFetchPostByIdQuery(id);

  return post ? (
    <div className="post">
      <h2 className="post__title">
        № {post.id} {post.title}
      </h2>
      <p className="post__body">{post.body}</p>
      <Link to={`/posts`}>
        <button className="post-item__button">Назад</button>
      </Link>
    </div>
  ) : (
    <div className="post">
      <h2>Loading...</h2>
      <button className="post-item__button" onClick={() => history.back()}>
        Назад
      </button>
    </div>
  );
};

export default Post;

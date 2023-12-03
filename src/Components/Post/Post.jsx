import postApi from '../../utils/api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Post = () => {
  const location = useLocation();
  const query = location.pathname.split('/');
  const id = query[query.length - 1];

  const { data: post, isLoading } = postApi.useFetchPostByIdQuery(id);

  return post ? (
    <div className="post">
      <h2>
        № {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
      <Link to={`/posts`}>
        <button className="post-item__button">Назад</button>
      </Link>
    </div>
  ) : (
    <div className="post">
      <h2>Loading...</h2>
      <Link to={`/posts`}>
        <button className="post-item__button">Назад</button>
      </Link>
    </div>
  );
};

export default Post;

import './postItem.css';

const PostItem = ({ id, title, body }) => {
  return (
    <li className="post-item">
      <span className="post-item__number">{id}</span>
      <h2 className="post-item__title">{title}</h2>
      <p className="post-item__body">{body}</p>
    </li>
  );
};

export default PostItem;

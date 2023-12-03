import './postItem.css';

const PostItem = ({ id, title, body }) => {
  return (
    <li className="post-item">
      <span className="post-item__number">{id}</span>
      <h2 className="post-item__title">{title}</h2>
      <div className="post-item__body">
        <p className="post-item__body-description">{body}</p>
        <button className="post-item__button">просмотр</button>
      </div>
    </li>
  );
};

export default PostItem;

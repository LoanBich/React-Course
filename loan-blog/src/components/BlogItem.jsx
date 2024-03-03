import "./BlogItem.css";

function BlogItem(props) {
  return (
    <article>
      <img src={props.imageUrl} />
      <div className="detail">
        <h1>{props.title}</h1>
        <p>{props.summary}</p>
        <div>
          <p className="author">{props.author}</p>
          <p>{props.createdAt}</p>
          <p>{props.nComments} comments</p>
        </div>
      </div>
    </article>
  );
}

export default BlogItem;

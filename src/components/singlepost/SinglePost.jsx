import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        ></img>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          impedit reiciendis ab quos consequuntur asperiores adipisci cum, quas
          recusandae, dolorum laboriosam. Accusamus aliquid dolor voluptates
          vitae! Autem ipsa architecto ad. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Porro impedit reiciendis ab quos
          consequuntur asperiores adipisci cum, quas recusandae, dolorum
          laboriosam. Accusamus aliquid dolor voluptates vitae! Autem ipsa
          architecto ad.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Porro impedit reiciendis ab quos consequuntur asperiores
          adipisci cum, quas recusandae, dolorum laboriosam. Accusamus aliquid
          dolor voluptates vitae! Autem ipsa architecto ad.Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Porro impedit reiciendis ab quos
          consequuntur asperiores adipisci cum, quas recusandae, dolorum
          laboriosam. Accusamus aliquid dolor voluptates vitae! Autem ipsa
          architecto ad.
        </p>
      </div>
    </div>
  );
}

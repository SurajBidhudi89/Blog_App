import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://www.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg?w=1024" alt=""></img>
        <div className="postInfo">
            <div className="postCat">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi sapiente placeat qui voluptatum, quaerat laborum dicta ab, corrupti aspernatur nulla fuga! Accusantium quisquam, sed delectus architecto saepe deleniti debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi sapiente placeat qui voluptatum, quaerat laborum dicta ab, corrupti aspernatur nulla fuga! Accusantium quisquam, sed delectus architecto saepe deleniti debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi sapiente placeat qui voluptatum, quaerat laborum dicta ab, corrupti aspernatur nulla fuga! Accusantium quisquam, sed delectus architecto saepe deleniti debitis?</p>
      
    </div>
  )
}

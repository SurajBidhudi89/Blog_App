import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                ></img>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
                    nulla dolor culpa quidem fugiat sunt, minima repudiandaeit.

                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">cinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                </div>

            </div>
        </div>
    );
}

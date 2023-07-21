import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Setttings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""></img>
                        <label htmlFor="fileInput" >
                            <i className=" settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}></input>

                    </div>
                    <label> Username</label>
                    <input type="text" placeholder="enter your name" name="name"/>
                    <label> Email</label>
                    <input type="email" placeholder="s" name="email"/>
                    <label> Password</label>
                    <input type="password" name="password"/>
                    <button type ="submit" className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

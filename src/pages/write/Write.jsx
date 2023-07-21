import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""></img>
    
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileinput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          ></input>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story...."
            typeof="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

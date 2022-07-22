import "../css/Header.css";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";

const Header = () => {
  return (
    <div>
      <form className="content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaBFkkOr7Vh49LeVqSsv7k7temNeEO5fBsg&usqp=CAU"
          alt="dread"
        />
        <input type="text" id="body" placeholder="What's happening?" />
      </form>

      <div className="innerContent">
        <div className="header-icons">
          <a>
            <AiOutlinePicture />
          </a>

          <a>
            <AiOutlineFileGif />
          </a>

          <a>
            <BiPoll />
          </a>

          <a>
            <BsEmojiSmile />
          </a>

          <a>
            <TbCalendarTime />
          </a>

          <a>
            <TiLocationOutline />
          </a>
        </div>
        <button className="btn">Tweet</button>
      </div>
    </div>
  );
};

export default Header;

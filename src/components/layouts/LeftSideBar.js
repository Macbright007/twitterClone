import "../css/LeftSideBar.css"
import {FaTwitter} from "react-icons/fa"
import {BiHomeCircle} from "react-icons/bi"
import {FiHash,FiBell} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
import {HiOutlineUser} from "react-icons/hi"
import {TbDotsCircleHorizontal} from "react-icons/tb"
import { tweet } from "./tweet"

const LeftSideBar = () => {
  return (
    <div className="leftside-container">
      <div className="logo">
          <FaTwitter color="1DA1F2" fontSize="2rem"/>
      </div>

      <div className="sidebar-icons">
          <a><BiHomeCircle /></a>
          <a><FiHash /></a>
          <a><FiBell /></a>
          <a><AiOutlineMail /></a>
          <a><HiOutlineUser /></a>
          <a><TbDotsCircleHorizontal /></a>
          {/* <a><span>{tweet}</span></a>   
          <div className="chat">
            <span>{tweet}</span>  
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */}
      </div>

      <div className="footerImage">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaBFkkOr7Vh49LeVqSsv7k7temNeEO5fBsg&usqp=CAU" alt="dread"/>
      </div>
    </div>
  )
}

export default LeftSideBar
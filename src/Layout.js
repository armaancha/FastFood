import "./styles.css";
import {Outlet, useNavigate} from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

export default function Layout(props) {
  const navigate = useNavigate();

  return (
    <div id="page">
      <div id="title">
        <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/burger_icon_199455.png" width="60" height="60"/>
        <h1 onClick={() => {navigate("/")}}>McMaani's</h1>
      </div>
      <div id="links">
        <div className="link" onClick={() => {navigate("/")}}><MdHome size={30}/></div>
        <div className="link" onClick={() => {navigate("/about")}}><MdInfo size={30}/></div>
        <div className="link" onClick={() => {navigate("/deals")}}><IoMdPricetag size={30}/></div>
        <div className="link" onClick={() => {navigate("/checkout")}}><MdShoppingCart size={30}/></div>
        <div id="cartCount">{props.orderLength>0 ? props.orderLength : null}</div>
      </div>
      <Outlet/>
    </div>
  )
}

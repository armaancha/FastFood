import "./styles.css";

export default function Menu(props) {
  return (
    <div className="contentPage">
      <h1>Menu</h1>
      <div id="menuItems">
        {props.menu.map((item) => {
          return(
           <MenuItem item={item} addItem={props.addItem}/>
          )
        })}
      </div>
    </div>
  )
}

function MenuItem(props) {
  return (
    <div className="item">
      <img src={props.item.image} width="170" />
      <div className="itemDetails">
        <h2>{props.item.name}</h2>
        <h2>${props.item.price}</h2>
        <button onClick={() => props.addItem(props.item)}>Add</button>
      </div>
    </div>
  )
}

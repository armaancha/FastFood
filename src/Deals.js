import "./styles.css";

export default function Deals(props) {
  return(
    <div className="contentPage">
      <h1>Deals</h1>
      {props.deals.map((item) => {
          return(
           <DealsItem item={item}/>
          )
        })}
    </div>
  )
}

function DealsItem(props) {
  return (
    <div className="dealItem">
      <img src={props.item.image} width="170" />
      <div className="dealDetails">
        <h2>{props.item.name}</h2>
        <h4>{props.item.details}</h4>
      </div>
    </div>
  )
}

import "./styles.css";

export default function Checkout(props) {
  function getTotal() {
    let total = 0;
    for(let i=0; i<props.order.length; i++) {
      total+=(props.order[i].price*props.order[i].count);
    }
    return {
      subtotal:total,
      tax:0.09*total,
      total:1.09*total
    };
  }

  return(
    <div className="contentPage">
      <h1>Checkout</h1>
      <div id="orderItems">
        {props.order.map((item) => {
          return(
           <OrderItem item={item} removeItem={props.removeItem} addCount={props.addCount} minusCount={props.minusCount}/>
          )
        })}
      </div>
      { props.order.length>0 ? 
        (
          <div id="totalDiv">
            <h2>Subtotal: ${getTotal().subtotal.toFixed(2)}</h2>
            <h2>Tax: ${getTotal().tax.toFixed(2)}</h2>
            <h2>Total: ${getTotal().total.toFixed(2)}</h2>
          </div>
        ) : 
        <h2>Nothing in cart :(</h2>
      }

    </div>
  )
}

function OrderItem(props) {
  return (
    <div className="item">
      <img src={props.item.image} width="170" />
      <div className="itemDetails">
        <h2>{props.item.name}</h2>
        <h2>${props.item.price}</h2>
        <button onClick={() => {props.removeItem(props.item)}}>Remove</button>
      </div>
      <div className="countDiv">
        <button onClick={() => {props.minusCount(props.item)}}>-</button>
        <h2>x{props.item.count}</h2>
        <button onClick={() => {props.addCount(props.item)}}>+</button>
      </div>
    </div>
  )
}

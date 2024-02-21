import "./styles.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Menu from "./Menu";
import About from "./About";
import Deals from "./Deals";
import Checkout from "./Checkout";

export default function App() {
  const [order, setOrder] = useState([]);
  const [orderLength, setOrderLength] = useState(0);
  const [deals, setDeals] = useState([
    {
      name: "Money Mondays",
      details: "Every Monday, all items -100% OFF! This means that not only are they free, WE PAY YOU the cost of the item.",
      image: "https://archive.unews.utah.edu/wp-content/uploads/2021/03/Cash.jpg"
    },
    {
      name: "Buy 1 Get 1 Fries Thursdays",
      details: "Every Thursday, you can buy 1 order of fries and LITERALLY get JUST 1 singular fry.",
      image: "https://slang.net/img/slang/lg/bogo_2823.png"
    },
    {
      name: "Valentines Weekend",
      details: "From now till Tuesday, we will give a free fries with every purchase, IF we choose to. We can say no if we want.",
      image: "https://content.mycutegraphics.com/graphics/valentine/valentine-heart-clip-art-2.png"
    }
  ])

  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Fries",
      price: "3.99",
      image: "https://www.exelfoods.com/162-large_default/fast-food-fries-38-4x227kg.jpg"
    },
    {
      id: 2,
      name: "Chicken Nuggets",
      price: "5.99",
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-breakfast-fast-food-fried-chicken-nuggets-png-image_5813809.jpg"
    },
    {
      id: 3,
      name: "Cheeseburger",
      price: "3.99",
      image: "https://i2.wp.com/theclassicdad.com/wp-content/uploads/2018/09/sonic.png?resize=730%2C823&ssl=1"
    },
    {
      id: 4,
      name: "Mega Burger",
      price: "8.99",
      image: "https://www.wendys.com/sites/default/files/styles/max_650x650/public/2021-05/daves-triple-143_medium_US_en_0.png?itok=Nj4DPiCI"
    }
  ]);

  function addItem(item) {
    setOrderLength(orderLength+1);
    let found = false;
    let x = order.map((i) => {
      if(i.id===item.id) {
        found = true;
        let copy = {...i};
        copy.count++;
        return copy;
      }
      return i;
    })
    if(!found) {
      let copy={...item};
      copy.count=1;
      x.push(copy);
    }
    setOrder(x);
   }

   function removeItem(item) {
    let x = order.filter((i) => {
      if(i.id===item.id) {
        setOrderLength(orderLength-i.count);
        return false;
      }
      return true;
    })
    setOrder(x);
   }

  function addCount(item) {
    setOrderLength(orderLength+1);
    let x = order.map((i) => {
      if(i.id===item.id) {
        let copy = {...i};
        copy.count++;
        return copy;
      }
      return i;
    })
    setOrder(x);
  }

  function minusCount(item) {
    let x = order.map((i) => {
      if(i.id===item.id) {
        let copy = {...i};
        if(copy.count>0) {
          copy.count--;
          setOrderLength(orderLength-1);
        }
        return copy;
      }
      return i;
    })
    let y = x.filter((i) => {
      if(i.count<=0) {
        return false;
      }
      return true;
    })
    setOrder(y);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout orderLength={orderLength}/>}>
          <Route path="/" element={<Menu menu={menu} addItem={addItem}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/deals" element={<Deals deals={deals}/>}/>
          <Route path="/checkout" element={<Checkout order={order} removeItem={removeItem} addCount={addCount} minusCount={minusCount}/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  return (
    <h1>404</h1>
  )
}

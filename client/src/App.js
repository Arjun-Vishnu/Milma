import React, { useEffect, useState } from "react";
import bg from "../src/images/bg.jpg";
import shake from "../src/images/milkshake.jpg";
import logo from "../src/images/Frame.jpg";
import footer from "../src/images/footer.png";
import "./App.css";
import axios from "axios"
import gif from "../src/images/preview.gif"

function App() {

  const [cardData,setCardData] =useState([])
  const [showModal, setShowModal] = useState(false);
  const[name,setName]=useState("")
  const[quantity,setQuantity]=useState()
  const[price,setPrice]=useState()
  const[category,setCategory]=useState("")
  const[imageUrl,setImageUrl]=useState("")
  

  const fetchData = ()=>{
    axios.get("http://localhost:3000/products/all").then((res)=>{
      console.log(res.data,"response")
      setCardData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
fetchData()
  },[])
  const handleAddProducts =()=>{
    axios.post("http://localhost:3000/products/add",{
      name:name,
      quantity:quantity,
      price:price,
      category:category,
      imageUrl:imageUrl
    }).then((res)=>{
      window.location.reload();
    }).catch((err)=>{
      console.log(err,"err in add")
    })
  }
  const handleDelete = (id)=>{
    const isConfirmed = window.confirm('Are you sure you want to delete this item?');
   if(isConfirmed){
    axios.delete("http://localhost:3000/products/delete/"+id)
    .then((res)=>{
      window.location.reload();
    }).catch((err)=>{
      console.log(err,"err")
    })
  }
  }
  const handleAddClick = () => {

    setShowModal(true);
  };

  const handleCloseModal = () => {
    window.location.reload();
    setShowModal(false);
  };
  return (
    <div className="container-fluid">

      <img
        className="head"
        src={bg}
        alt="Head"
        loading="lazy"
      />
      <div className="content-container">
        <img
          className="shake"
          src={shake}
          alt="Head"
          loading="lazy"
        />
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
        </div>
      </div>
      <div className="products">
        <p className="product-head">Products</p>
      </div>
      <div className="add-products">
        <button className="btn-primary text-center" data-toggle="modal" data-target="#basicExampleModal"onClick={handleAddClick}>Add Products</button>
      </div>
      {showModal && (
        <div className="modal fade show" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="productName">Name:</label>
                  <input type="text" className="form-control" id="productName" placeholder="Enter product name"  onInput={(e)=>setName(e.target.value)}  />
                </div>
                <div className="form-group">
                  <label htmlFor="productQuantity">Quantity:</label>
                  <input type="number" className="form-control" id="productQuantity" placeholder="Enter product quantity"  onInput={(e)=>setQuantity(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="productPrice">Price:</label>
                  <input type="number" className="form-control" id="productPrice" placeholder="Enter product price" onInput={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="productCategory">ImageUrl:</label>
                  <input type="text" className="form-control" id="productCategory" placeholder="Enter product imageUrl"  onInput={(e)=>setImageUrl(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="productCategory">Category:</label>
                  <input type="text" className="form-control" id="productCategory" placeholder="Enter product category" onInput={(e)=>setCategory(e.target.value)}/>
                </div>
              </div>
              <div className="modal-footer">

                <button type="button" className=" btn-success" onClick={handleAddProducts}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
       {showModal && <div className="modal-backdrop fade show"></div>}

      <div className="chocolate">
        <button className="btn">Chocolate</button>
      </div>

      <div className="container">
  <div className="row">
    {cardData.map((card) => (
      card.category === "Chocolate" ? (
        <div className="col-md-4" key={card._id}>
          <div className="card">
            <img
              className="card-img-top"
              src={card.imageUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">
                <a>{card.name}</a>
              </h4>
              <div className=" d-flex justify-content-between">
              <span className="card-text ">{card.quantity} ml</span>
              <span className="card-text "style={{fontWeight:"bolder"}}>  ₹{card.price}</span>
              </div>
           
              <i
                  className="fa-solid fa-trash-can"
                  style={{ fontSize: "24px", marginLeft: "120px", cursor: "pointer" }}
                  onClick={() => handleDelete(card._id)}
                ></i>
            
              
            </div>
          </div>
        </div>
      ) : null
    ))}
  </div>
</div>

      <div className="chocolate">
        <button className="btn" id="vanilla">Vanilla</button>
      </div>

      <div className="container">
  <div className="row">
    {cardData.map((card) => (
      card.category === "Vanilla" ? (
        <div className="col-md-4" key={card._id}>
          <div className="card">
            <img
              className="card-img-top"
              src={card.imageUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">
                <a>{card.name}</a>
              </h4>
              <div className=" d-flex justify-content-between">
              <span className="card-text ">{card.quantity} ml</span>
              <span className="card-text "style={{fontWeight:"bolder"}}>  ₹{card.price}</span>
              </div>
              
              <i
                  className="fa-solid fa-trash-can"
                  style={{ fontSize: "24px", marginLeft: "100px", cursor: "pointer" }}
                  onClick={() => handleDelete(card._id)}
                ></i>
            </div>
          </div>
        </div>
      ) : 
    null
    ))}
  </div>
</div>
        <div className="chocolate">
        <button className="btn" id="pista">Pista</button>
      </div>

      <div className="container">
  <div className="row">
    {cardData.map((card) => (
      card.category === "Pista" ? (
        <div className="col-md-4" key={card._id}>
          <div className="card">
            <img
              className="card-img-top"
              src={card.imageUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">
                <a>{card.name}</a>
              </h4>
              <div className=" d-flex justify-content-between">
              <span className="card-text ">{card.quantity} ml</span>
              <span className="card-text "style={{fontWeight:"bolder"}}>  ₹{card.price}</span>
              </div>
              
              <i
                  className="fa-solid fa-trash-can"
                  style={{ fontSize: "24px", marginLeft: "120px", cursor: "pointer" }}
                  onClick={() => handleDelete(card._id)}
                ></i>
            </div>
          </div>
        </div>
      ) : null
  //       <div>
  //  <img src={gif} alt="loading..." />
  //   </div>
    ))}
  </div>
</div>

      <div>
      <div className="footer">
      <img
                  className="img"
                  src={logo}
                  alt="logo"
                />
                 <img
                  className="img"
                  src={footer}
                  alt="logo"
                />
              
      </div>
      <p className="para">© Milmaicecream. All rights Reserved.</p>
      </div>
  
    </div>

  );
}

export default App;

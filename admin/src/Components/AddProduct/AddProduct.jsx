import React, { useState } from 'react'
import './addProduct.css'
import upload_area from '../../assets/upload.svg'

const AddProduct = () => {

   const [image, setImage] = useState(false);
   const [productDetails, setProductsDetails] = useState({
      name: "",
      image: "",
      category: "spauda",
      new_price: "",
      old_price: ""
   })

   const imageHandler = (e) => {
      setImage(e.target.files[0]);
   }

   const changeHandler = (e) => {
      setProductsDetails({ ...productDetails, [e.target.name]: e.target.value })
   }

   const Add_product = async () => {
      console.log(productDetails);

      let responseData;
      let product = productDetails;

      let formData = new FormData();

      formData.append('product', image);

      await fetch('http://localhost:7000/upload', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
         },
         body: formData,
      }).then((resp) => resp.json()).then((data) => { responseData = data })

      if (responseData.success) {
         product.image = responseData.image_url;
         console.log(product);

         // Duomenu siuntimas i endpointa:
         await fetch('http://localhost:7000/addproduct', {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
         }).then((resp) => resp.json()).then((data) => {
            data.success ? alert("Produktas pridėtas") : alert("Produkto pridėti nepavyko")
         })
      }
   }

   return (
      <div className='add-product'>
         <div className="addproduct-itemfield">
            <p>Produkto pavadinimas</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Įveskite pavadinimą' />
         </div>

         <div className="addproduct-price">
            <div className="addproduct-itemfield">
               <p>Kaina</p>
               <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Įveslite kainą' />
            </div>
            <div className="addproduct-itemfield">
               <p>Pasiūlymo kaina</p>
               <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Įveslite kainą' />
            </div>
         </div>
         <div className="addproduct-itemfield">
            <p>Kategorija</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
               <option value="spauda">Spauda</option>
               <option value="graviravimas">Graviravimas</option>
               <option value="dovanų idėjos">Dovanų idėjos</option>
            </select>
         </div>
         <div className="addproduct-itemfield">
            <label htmlFor="file-input">
               <img className='addproduct-thumnail-image' src={image ? URL.createObjectURL(image) : upload_area} alt="upload area icon" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
         </div>
         <button onClick={() => { Add_product() }} className='addproduct-button'>Pridėti</button>



      </div>
   )
}

export default AddProduct

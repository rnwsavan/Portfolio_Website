import React, { useState } from 'react'
import { db, storage } from '../../firebase';

export const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/jpeg', 'image/png', 'image/webp']

  // product image handler
  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
      setProductImg(selectedFile);
      setError('');
    }
    else{
      setProductImg(null)
      setError("Please select a vaild image type")
    }
  }

  // add product from submit event
  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productName, productPrice, productImg);

    // storing the image
    const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
    uploadTask.on('state_change', snapshot=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      console.log(progress);
    },err=>{
      setError(err.message)
    },()=>{
      // getting product url and if success then storing the product in db
      storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=>{
        db.collection('products').add({
          ProductName : productName,
          ProductPrice : Number(productPrice),
          ProductImg : url
        }).then(()=>{
          setProductName('');
          setProductPrice(0);
          setProductImg('');
          setError('');
          document.getElementById('file').value='';
        }).catch(err=> setError(err.message));
      })
    })
  }
  return (
    <div className='container'>
        <br/>
        <h2>ADD PRODUCTS</h2>
        <hr/>
        <form autoComplete='off' className='form-group' onSubmit={addProduct}>
            <label htmlFor='product-name'>Product Name</label>
            <br/>
            <input type={'text'} className='form-control' required
            onChange={(e)=>setProductName(e.target.value)} value={productName}/>
            <br/>
            <label htmlFor='product-name'>Product Price</label>
            <br/>
            <input type={'number'} className='form-control' required 
            onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
            <br/>
            <label htmlFor='product-name'>Product Image</label>
            <br/>
            <input type={'file'} className='form-control' required
            onChange={productImgHandler} id='file'/>
            <br/>
            <button className='btn btn--full btn--black text-center'>ADD</button>
        </form>
        {error && <span>{error}</span>}
    </div>
  )
}

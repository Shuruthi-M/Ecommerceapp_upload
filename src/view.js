import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./view.css";
import StarRating from './starrating';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Navigation from './navigation';
const View = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [color,setColor] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!post) {
    return <div>No product data found.</div>;
  }

  return (
    <div className='expview'>
      <div className='nav'>
      <div className='logo'>
       <img src="/applogo.png" className='img' alt="Logo" /> 
       <h1>SparkTrendzon</h1>
       </div>
     <Navigation/>
     </div>
   <div className='imageview'>
       <div className='firstview'>
      <img  className="image1"src={post.image} alt={post.title} />
       </div>
      <div className='secondview'>
      <h6>{post.title}</h6>
       <p>{post.category}</p>
        <p>{post.description}</p>
      <p>₹{post.price}</p>
      <p>Quantity: <input id='quantity' type='number' placeholder='1' ></input></p>
      <div className='rate'>
       <p>{post.rating.rate}</p>
      <StarRating rating={post.rating.rate} />
      </div>
      <FavoriteRoundedIcon
        style= {{color:color}} 
        onClick={()=>setColor("red")}
        />
      </div>
    </div>
    </div>
  );
};

export default View;

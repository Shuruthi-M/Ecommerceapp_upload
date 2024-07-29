import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './starrating';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ImageSlider from './imageSlider';
import Navigation from './navigation';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [records, setRecords] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jewelerycolor, setJeweleryColor] = useState("");
  const [electrocolor, setElectroColor] = useState("");
  const [menclothcolor, setMenclothColor] = useState("");
  const [womenclothcolor, setWomenclothColor] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setRecords(data);
      });
  }, []);

  const dataArray = (array, size) => {
    const sets = [];
    for (let i = 0; i < array.length; i += size) {
      sets.push(array.slice(i, i + size));
    }
    return sets;
  };

  const filter = (event) => {
    setRecords(posts.filter(f => f.category.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleCategoryClick = (setCurrentColor, currentColor, category) => {
    setJeweleryColor("");
    setElectroColor("");
    setMenclothColor("");
    setWomenclothColor("");
    setCurrentColor(currentColor === "skyblue" ? "" : "skyblue");
    setSelectedCategory(category);
    setRecords(posts.filter(post => post.category === category ? post : ""));
  };

  return (
    <div className='container-fluid'>
      <div className='logo'>
        <img src="/applogo.png" className='img' alt="Logo" /> 
        <h1>SparkTrendzon</h1>
        <div className='searchicon'>
          <input type='text' placeholder='Search' onChange={filter} />
          <SearchOutlinedIcon />
        </div>
       
         <Navigation /> 
      </div>
      <div>
        <ImageSlider />
        <div className='sort'>
          <button type="button" className='collection' style={{ backgroundColor: jewelerycolor }} onClick={() => handleCategoryClick(setJeweleryColor, jewelerycolor, 'jewelery')}>Jewelery</button>
          <button type="button" className='collection' style={{ backgroundColor: electrocolor }} onClick={() => handleCategoryClick(setElectroColor, electrocolor, 'electronics')}>Electronics</button>
          <button type="button" className='collection' style={{ backgroundColor: menclothcolor }} onClick={() => handleCategoryClick(setMenclothColor, menclothcolor, "men's clothing")}>Men's clothing</button>
          <button type="button" className='collection' style={{ backgroundColor: womenclothcolor }} onClick={() => handleCategoryClick(setWomenclothColor, womenclothcolor, "women's clothing")}>Women's clothing</button>
        </div>
      </div>
      {records.length > 0 ? (
        dataArray(records, 5).map((set, index) => (
          <ul className='detail' key={index}>
            {set.map(post => (
              <li className='data' key={post.id} onClick={() => navigate(`/detail/${post.id}`)}>
                <div className='container'>
                  <img src={post.image} className="image-style" alt={post.title} />
                  <p>₹{post.price}</p>
                  <span>{post.category}</span>
                  <h5>{post.title}</h5>
                  <p>{post.rating.rate}</p>
                  <StarRating rating={post.rating.rate} />
                </div>
              </li>
            ))}
          </ul>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Home;

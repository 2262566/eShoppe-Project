import './explore.css';
import triangle from './image/triangle.png'
import shoppingcart from './image/shoppingcart.png'
import guccibag from './image/guccibag.jpg'
import sunglass from './image/sunglass.jpg'
import watch from './image/watch.jpg'
import bagcombo from './image/bag-combo.jpg';
import pendant from './image/pendant.jpg';
import nike from './image/nike.jpg';
import headphones from './image/headphones.jpg'
import star from './image/star.jpg';
// import Popup from './popup';
import Success from './successfull'



function App(){
    return(
        <div className='main'>
            
            <div className='sub-main'>
                <div>
                    <div className='container-img'>
                        <img src={triangle} className="triangle"></img>
                    </div>
                    <header>
                        <div className='link'>
                            <div className='Home'>
                                <p><a href='#'>Home</a></p>
                            </div>
                            <div className='Home'>
                                <p><a href='#'>Explore</a></p>
                            </div>
                            <div className='Home'>
                                <p><a href='#'>My About</a></p>
                            </div>


                        </div>
                    </header>
                    <br></br>
                    <div className='table'>
                        <table>
                            <th><p className='p1'>Search Products</p></th>
                            <th><p className='p1'>Filter By</p><p className='p2'>All Categories</p></th>
                            <th><p className='p1'>Sort by</p><p className='p2'>Relevance</p></th>
                        </table>
                        <img src={shoppingcart} className="shoppingcart"></img>
                    </div>
                    <br></br>
                    
                 <div className='holder'>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={guccibag} className="guccibag"></img>
                        </div>
                            <h3>Gucci Leather Bags</h3>
                            <h3 className='para'>Rs. 5,999   </h3>
                            <h3 className='para2'> 4.2<img src={star} className="star"></img></h3>
                            <div className='btn'>
                            
                                <button className='b1'>Add To Cart</button>
                                
                                <button className='b2'>Buy Now</button>
                            </div>
                    </div>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={sunglass} className="sunglass"></img>
                        </div>
                            <h3>Louis Vuitton Sunglass</h3>
                            <h3 className='para'>Rs. 21,899</h3>
                            <h3 className='para2'>4.8<img src={star} className="star"></img></h3>
                            <div className='btn'>
                                <button className='b1'>Add to Cart</button>
                                <button className='b2'>Buy Now</button>
                            </div>
                    </div>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={watch} className="watch"></img>
                        </div>
                        <h3>Fasttrack Watch</h3>
                        <h3 className='para1'>Rs. 2,799</h3>
                        <h3 className='para2'>3.9 <img src={star} className="star"></img> </h3>
                        <div className='btn'>
                            
                            <button className='b1'>Add to Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={bagcombo} className="bagcombo"></img>
                        </div>
                        <h3>Travel bag combo</h3>
                        <h3 className='para1'>Rs. 8,999</h3>
                        <h3 className='para2'>4.2 <img src={star} className="star"></img> </h3>
                        <div className='btn'>
                            <button className='b1'>Add to Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>
                    </div>

                 </div>
                 <br></br>
                 <div className='holder'>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={pendant} className="pendant"></img>
                        </div>
                        <h3>Swarovski Pendant</h3>
                        <h3 className='para1'>Rs. 7,589</h3>
                        <h3 className='para2'>4.5 <img src={star} className="star"></img> </h3>
                        <div className='btn'>
                            <button className='b1'>Add to Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>
                    </div> 
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={nike} className="nike"></img>
                        </div>
                        <h3>Nike Shoes</h3>
                        <h3 className='para1'>Rs. 6,599</h3>
                        <h3 className='para2'>4.9 <img src={star} className="star"></img></h3>
                        <div className='btn'>
                            <button className='b1'>Add to Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={guccibag} className='guccibag'></img>
                        </div>
                        <h3>Gucci Leather Bag Small </h3>
                        <h3 className='para1'>Rs. 2,599</h3>
                        <h3 className='para2'>4.0 <img src={star} className="star"></img> </h3>
                        <div className='btn'>
                            <button className='b1'>Add To Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={headphones} className="headphones"></img>
                        </div>
                        <h3>Headphone</h3>
                        <h3 className='para1'>Rs. 15,759</h3>
                        <h3 className='para2'>4.0 <img src={star} className="star"></img>  </h3>
                        <div className='btn'>
                            <button className='b1'>Add To Cart</button>
                            <button className='b2'>Buy Now</button>
                        </div>

                    </div>
                 </div>

                </div>


            </div>
             {/* <Popup /> */}
             <Success/>
        </div>
        

    );
}
export default App;
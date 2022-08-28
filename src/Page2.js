import './Page2.css';
import triangle from './image/triangle.png';
import handbag from './image/landingAccessories.png'
import b1 from './image/brand1.png'
import b2 from './image/brand2.png'
import b3 from './image/brand3.png'
import b4 from './image/brand4.png'
import b6 from './image/brand6.png'
import b7 from './image/brand7.png'
import guccibag from "./image/guccibag.jpg"
import rayban from "./image/rayban.jpg"
import nike from "./image/nike.jpg"

function App(){
    return(
        <div className='main2'>
            <div className='sub-main2'>
                <div>
                        <div className='container-img'>
                         <img src={triangle} alt="triangle" className='triangle'></img>
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
                        <div className='p1'>
                            <p>
                                <h4>Your ultimate accessories store!</h4>
                            </p>
                        </div>
                        <h1 className='p2'>Shop from a wide range of</h1>
                        <h1 className='p2'>10K plus Products</h1>

                        <div className='btn'>
                            <button>Shop Now</button>
                            <button>Watch Video</button>
                        </div>
                    <div className='h2'>
                        <h2>Featured Product</h2>

                    </div>
                    <div className='partition'>
                        <div className='left'>
                            <div className='holder'>
                                <div className='card-container'>
                                    <div className='image-container'>
                                         <img src={guccibag} alt="guccibag" className="guccibag"></img>
                                    </div>
                            
                                    <h3>Gucci Leather Bags</h3>
                                    <p className='para'>Flat 20% off</p>
                                </div>
                                <div className='card-container'>
                                   <div className='image-container'>
                                        <img src={rayban} alt="rayban" className="rayban"></img>
                                   </div>
                                        <h3>Ray Ban Polaroid</h3>
                                        <p className='para'>Buy 2, get one flat 50%</p>
                                </div>
                                <div className='card-container'>
                                    <div className='image-container'>
                                        <img src={nike} alt="nike" className="nike"></img>
                                    </div>
                                    <h3>Nike</h3>
                                    <p className='para'>Black friday Exlusive</p>
                                </div>


                            </div>

                        </div>
                        <div className='Right'>
                            <img src={handbag} alt='handbag' className='handbag'></img>
                        </div>

                    </div>
                    <footer>
                        
                        <h2 className='ft'>Popular Brands</h2>
                            <div className='bottom'>
                                <div className='footer'>
                                    <img src={b1} alt='b1' className="b1"></img>
                                </div>
                                <div className='footer'>
                                    <img src={b2} className='b1'></img>
                                </div>
                                <div className='footer'>
                                    <img src={b3} className='b1'></img>
                                </div>
                                <div className='footer'>
                                    <img src={b4} className='b1'></img>
                                </div>
                                <div className='footer'>
                                    <img src={b6} className='b1'></img>
                                </div>
                                <div className='footer'>
                                    <img src={b7} className='b1'></img>
                                </div>
                            </div>
                
                    </footer>
                </div>
            </div>
        </div>

    );

}
export default App;
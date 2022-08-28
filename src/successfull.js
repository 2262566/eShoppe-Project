import './successfull.css';
import tick from './image/tick.png'
import rate from './image/rating.png'

export default function Success(){
    return(
        <div className='pop1'>
            <div className='pop1-container'>
                <div className='pop1-close'>&times;</div>
                <div className='header'>
                    <h3 className='pp1'>Order Placed Successfully!!</h3>
                </div>
                <div className='tick-con'>
                    <img src={tick} className={tick}></img>
                </div>
                <div className='rating'>
                    <h3 className='pp2'>Rate your shopping experience  </h3>
                </div>
                <div className='rateimg'>
                <img src={rate} className="rate"></img>
                </div>
            </div>
        </div>
    );
}
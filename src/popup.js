import './popup.css'
import nike from './image/nike.jpg'
import headphones from './image/headphones.jpg'

export default function Popup(){
    return (
        <div className='pop'>
            <div className='pop-container'>
                <div className='pop-close'>&times;</div>
                <div className='pop-title'>
                    <h3>Checkout item(s)</h3>
                </div>
                <br></br>
                <div className='content1'>
        
                    <table>
                    <th><img src={nike} className="nike"></img></th>
                    <th><h3 className='hh'>Nike Shoes</h3></th>
                    <th><p>Quatity: 1</p></th>
                    <th><p>Rs. 6,599</p></th>
                    </table>
                </div>
                <div className='content1'>
                    <table>
                        <th><img src={headphones} className="nike"></img> </th>
                        <th><h3 className='hh'>Headphone</h3></th>
                        <th><p>Quatity: 2</p></th>
                        <th><p>Rs. 31,518</p></th>
                    </table>
                </div>
                <br></br>
                <div className='footer'>
                    <button className='btn'>Checkout</button>
                </div>
            </div>
        </div>
    );
}
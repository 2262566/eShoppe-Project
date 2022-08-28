import logo from './logo.svg';
import './App.css';
import profile from "./image/profile-image.png"
import email from "./image/email.png"
import pass from "./image/password.jpg"
import pic from './image/loginn1.png'
import triangle from './image/triangle.png';

function App() {
  return (
  <div className="main">
            <div className="sub-main">
            <div>
              <div className='tri-img'>
                <img src={triangle} className="tri"></img>
              </div>
              <div className='li'>
                <div className='ex'>
                  <p><a href='#'>Explore</a></p>
                </div>
                <div className='ex'>
                  <p><a href='#'>Signup</a></p>
                </div>
              </div>
              <div className='part'>
                <div className='Left'>
                  <img src={pic} className="pic"></img>
                </div>
                <div className='right'>
              <div className="img">
                {/* <div className="container-image">
                  <img src={profile} alt="profile" className="profile"></img>

                </div> */}
              </div>
              <div>
                <h1>Login Page</h1>
                <img src={email} alt="email" className="email"></img>
                <input type="text" placeholder="username" className="name"></input>
              </div>
              <br></br>
              <div>
                <img src={pass} alt="pass" className="email"></img>
                <input type="password" placeholder="password" className="name"></input>

              </div>
              <div className="login-button">
              <button onClick="">
                Login
              </button>
              </div>
              <div className="link">
                <p>
                  <a href="#">Forget password ?</a> Or <a href="#" >Sign Up</a>
                </p>
              </div>
              </div>
            </div>
            </div>
            </div>
            
        </div>
        
  );
}

export default App;

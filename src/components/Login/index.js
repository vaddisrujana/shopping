import {Component} from 'react'
import shopping_icon from '../../Images/shopping-icon.png'
import './index.css';

class Login extends Component{
    render(){
        return(
            <div className='login-background'>
                <div className='flex'>
                <img src={shopping_icon} alt="shoppingIcon" className='logo1'/>
               
                <h1>Desire</h1>
                </div>
                <div className='login-container'>
                    <h1>Welcome To Shopping Desire</h1>
                    <div>
                        <label htmlFor='username' className='username'>USERNAME</label>
                        <br/>
                        <input type="text" id="username" placeholder='Enter Usename'/>
                        <br/>
                        <label htmlFor='password' className='password'>PASSWORD</label>
                        <br/>
                        <input type="password" id="password" placeholder='Enter Password'/>
                        <br/>
                        <div className='button-background'>
                            <button className='login-button'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
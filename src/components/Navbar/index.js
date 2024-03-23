import shopping_icon from '../../Images/shopping-icon.png'
import './index.css';
const Navbar=()=>(
    <nav>
        <div className='nav-background'>
            <div className='logo-background'>
                <img src={shopping_icon} alt="shoppingIcon" className='logo'/>
                <p>Shopping Desire</p>
            </div>
            <div className='nav-container1'>
                <input type="search" placeholder='Search for products?' className='search' />
                <p className='wishlist'>Wishlist</p>
                <p className='cart'>Cart</p>
                <button className='logout'>Logout</button>
               
            </div>
        </div>
    </nav>
)

export default Navbar
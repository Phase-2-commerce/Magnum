import NavBar from "./NavBar"
import Footer from "./Footer"
import '../Wishlist.css'
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Wishlist = () => {
  return (
    <>
     <NavBar />
     <div className="main-container">
        <div className="head">
        <p className="page-header">
            Wishlist (4)
        </p>
        <button className="move">Move All To Bag</button>
        </div>
        <div className="wishlist-container">
            <div className="product-card">
                <div className="product-info">
                    <div className="discount">
                        <p className="discount-amount">-35%</p>
                        <div className="bin">
                        <IoTrashOutline className="bin-icon"/>
                        </div>
                    </div>
                    <div className="cart-button">
                        <img src="https://images.unsplash.com/photo-1604494320172-4e4e5f40359d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="A handbag" className="ima" />
                        <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                    </div>
                </div>
                <div className="details">
                    <p className="name">Gucci Duffle bag</p>
                    <span className="amount">$960</span><span className="amount2">$1160</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                    <div className="discount">
                        <div className="bin">
                        <IoTrashOutline className="bin-icon2"/>
                        </div>
                    </div>
                    <div className="cart-button">
                        <img src="https://media.istockphoto.com/id/1364911473/photo/simple-wireless-gamepad-for-gaming-3d-render-illustration.webp?b=1&s=612x612&w=0&k=20&c=kfYUYgi2zl4D23PAXisV_Etohi_sFPeHvawZh09jz7U="  className="ima"/>
                        <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                    </div>
                </div>
                <div className="details">
                    <p className="name">GP11 Shooter USB Gamepad</p>
                    <span className="amount">$550</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                    <div className="discount">
                        <div className="bin">
                        <IoTrashOutline className="bin-icon2"/>
                        </div>
                    </div>
                    <div className="cart-button">
                        <img src="https://images.unsplash.com/photo-1552327359-d86398116072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" className="ima" />
                        <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                    </div>
                </div>
                <div className="details">
                    <p className="name">Quilted Satin Jacket</p>
                    <span className="amount">$750</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                    <div className="discount">
                        <div className="bin">
                        <IoTrashOutline className="bin-icon2"/>
                        </div>
                    </div>
                    <div className="cart-button">
                        <img src="https://images.unsplash.com/photo-1658673609646-9c7ba9514b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3B1JTIwY29vbGVyfGVufDB8fDB8fHww" className="ima" />
                        <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                    </div>
                </div>
                <div className="details">
                    <p className="name">RGB liquid CPU Cooler</p>
                    <span className="amount">$1960</span>
                </div>
            </div>
        </div>
        <div className="just-for-you">
            <div className="head">
            <p className="fyp">
                Just For You
            </p>
            <button className="see">See All</button>
            </div>
            <div className="wishlist-container">
            <div className="product-card">
                <div className="product-info">
                         <div className="discount">
                            <p className="discount-amount">
                                -35%
                            </p>
                            <div className="bin1">
                            <MdOutlineRemoveRedEye className="bin-icon4" />
                            </div>
                        </div>
                        <div className="cart-button">
                            <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="A Gaming Laptop"  className="ima"/>
                            <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                        </div>
                        <div className="details">
                            <p className="name">ASUS FHD Gaming Laptop</p>
                            <span className="amount">$960</span><span className="amount2">$1160</span>
                             <div className="rating">
                             <p className="ratings">
                            <FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/> <span className="pple">(65)</span>
                            </p>
                             </div>
                        </div>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                         <div className="discount">
                            <p className="discount-amount">
                                -35%
                            </p>
                            <div className="bin1">
                            <MdOutlineRemoveRedEye className="bin-icon4" />
                            </div>
                        </div>
                        <div className="cart-button">
                            <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHZ8ZW58MHx8MHx8fDA%3D" alt="A Gaming Laptop"  className="ima"/>
                            <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                        </div>
                        <div className="details">
                            <p className="name">IPS LCD Gaming Monitor</p>
                            <span className="amount">$1160</span>
                             <div className="rating">
                             <p className="ratings">
                            <FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/> <span className="pple">(65)</span>
                            </p>
                             </div>
                        </div>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                         <div className="discount">
                            <p className="discount-amount2">
                                NEW
                            </p>
                            <div className="bin1">
                            <MdOutlineRemoveRedEye className="bin-icon4" />
                            </div>
                        </div>
                        <div className="cart-button">
                            <img src="https://images.unsplash.com/photo-1535043205849-513fe27db33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D" alt="A Gaming Laptop"  className="ima"/>
                            <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                        </div>
                        <div className="details">
                            <p className="name">HAITV HV-G92 Gamepad</p>
                            <span className="amount">$560</span>
                             <div className="rating">
                             <p className="ratings">
                            <FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/> <span className="pple">(65)</span>
                            </p>
                             </div>
                        </div>
                </div>
            </div>
            <div className="product-card">
                <div className="product-info">
                         <div className="discount">
                            <div className="bin2">
                            <MdOutlineRemoveRedEye className="bin-icon5" />
                            </div>
                        </div>
                        <div className="cart-button">
                            <img src="https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D" alt="A Gaming Laptop"  className="ima"/>
                            <button className="btn"> <MdOutlineShoppingCart  className="cart-icon
                        "/>Add To Cart</button>
                        </div>
                        <div className="details">
                            <p className="name">AK-900 Wired Keyboard</p>
                            <span className="amount">$200</span>
                             <div className="rating">
                             <p className="ratings">
                            <FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/> <span className="pple">(65)</span>
                            </p>
                             </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
     </div>
     <div className="footer">
            <Footer />
        </div>
    </>
  )
}

export default Wishlist
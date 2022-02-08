import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../headerComp/Navbar";
import Footer from "../FooterComp/Footer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actions";
import { AnimatePresence, motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

function Singleproduct() {
  const state = useSelector((state) => state.handleCart);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [cartBtn, setCartBtn] = useState("Add to Cart")

  const [count, setCount] = useState(1);
  const history = useHistory();

  // dispatch
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getproductdata = async () => {
      const response = await fetch(` https://e569-103-103-214-27.ngrok.io/watches/${id}`);
      setProduct(await response.json());
    };

    getproductdata();
  });
  const [thumbsSwiper, setThumbsSwiper] = useState();
 

  // set initial quantity from singlepageproduct imp
  product.quantity = 1;




  // push to product page

  const handelhistory = () => {
    history.goBack();
  };

  // goto cart page
  const gocart = () => {
    history.push("/mycart");
  };
  // count

  const increasecount = () => {
    setCount(count + 1);
  };

  const decreasecount = () => {
    setCount(count - 1);

    if (count === 0) {
      setCount(0);
    }
  };

  // // cart
  // const addtocart = (product) => {
  //    if (cartBtn === "Add to Cart") {

  //     dispatch(addItem(product))
  //      setCartBtn("Remove from Cart")

  //    }
  //    else{
  //     dispatch(delItem(product))
  //     setCartBtn("Add to Cart")
  //    }
  // };
  return (
    <>
  {/* page transition animation */}
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

      <Navbar></Navbar>
      <div className="container param-single-product-wrapper">
        <button className="home-btn" onClick={() => handelhistory()}>
          <img className="navbar-icons" src="/assets/images/logo/left.png" />
          Go Back
        </button>

        <div className="row single-product-row-wrapper">
          <div className="col-md-6">
            <Swiper
              style={{
                "--swiper-navigation-color": "#00000",
                "--swiper-pagination-color": "#0000",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySw"
            >
              <SwiperSlide className="paramslide">
                <img src={product.image1} />
              </SwiperSlide>
              <SwiperSlide className="paramslide">
                <img src={product.image2} />
              </SwiperSlide>
              <SwiperSlide className="paramslide">
                <img src={product.image3} />
              </SwiperSlide>
              <SwiperSlide className="paramslide">
                <img src={product.image4} />
              </SwiperSlide>
              <SwiperSlide className="paramslide">
                <img src={product.image5} />
              </SwiperSlide>
              <SwiperSlide className="paramslide">
                <img src={product.image6} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="myparamswiper"
            >
              <SwiperSlide className="paramslide2">
                <img src={product.image1} />
              </SwiperSlide>
              <SwiperSlide className="paramslide2">
                <img src={product.image2} />
              </SwiperSlide>
              <SwiperSlide className="paramslide2">
                <img src={product.image3} />
              </SwiperSlide>
              <SwiperSlide className="paramslide2">
                <img src={product.image4} />
              </SwiperSlide>
              <SwiperSlide className="paramslide2">
                <img src={product.image5} />
              </SwiperSlide>
              <SwiperSlide className="paramslide2">
                <img src={product.image6} />
              </SwiperSlide>
            </Swiper>
          </div>
           
          <div className="col-md-6 item-desc-wrapper">
            <div>
              <h4 className="p-title">{product.title}</h4>
            </div>

            <div>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <Link> View Reviews</Link>
            </div>
            <div className="price-wrapper">
              <p>
                MRP ₹{product.price}
                <span className="off-color"> {product.off} </span> (incl. of all
                taxes)
              </p>
            </div>

            <div className="description-wrapper">
              <p>₹{product.desc}</p>
            </div>

            <div className="emi-wrapper">
              <p>No cost EMI starts at ₹354 </p>
              <Link className="options-link">See Available Options </Link>
            </div>

            <div className="qty-wrapper">
              <p>Product QTY</p>
              <button className="count-btn" onClick={() => increasecount()}>
                +
              </button>
              <span className="counter">{count}</span>
              <button className="count-btn" onClick={() => decreasecount()}>
                -
              </button>
            </div>

            <div className="cart-btn">
              <button onClick={() => addProduct(product)}>Add to Cart</button>
              <button onClick={() => gocart()}> Go To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="singleproduct-footer">
      <Footer></Footer>
      </div>
      </motion.div>
    </>
  );
}

export default Singleproduct;

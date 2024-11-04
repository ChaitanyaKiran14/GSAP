import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { gsap } from 'gsap';

// Import images from the local assets folder
import product1 from "../assets/images/optim.png";
import product2 from "../assets/images/mega.png";
import product3 from "../assets/images/bumel.png";



const products = [
  {
    id: 1,
    image: product1,
    background: "bg-gradient-to-b from-[#FE783D] to-[#121826]",
    color: "Blood Orange",
    price: "$1250",
    productId: "3534R4"
  },
  {
    id: 2,
    image: product2,
    background: "bg-gradient-to-b from-[#00499D] to-[#121826]",
    color: "Navy Blue",
    price: "$1250",
    productId: "3535R4"
  },
  {
    id: 3,
    image: product3,
    background: "bg-gradient-to-b from-[#DAB1C8] to-[#511990]",
    color: "Purple Rose",
    price: "$1250",
    productId: "3536R4"
  }
];

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Initial animations
    gsap.from('.credits', { x: -50, opacity: 0, duration: 1, delay: 0.7 });
    gsap.from('.product-info', { y: 30, opacity: 0, duration: 1, delay: 0.9 });
    gsap.from('.product-image', { scale: 0.9, opacity: 0, duration: 1.2, delay: 0.5 });
    gsap.from('.navigation', { y: -30, opacity: 0, duration: 1, delay: 0.3 });
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Animate elements on slide change
    gsap.from('.product-info', { y: 30, opacity: 0, duration: 0.8 });
    gsap.from('.product-image', { scale: 0.9, opacity: 0, duration: 1 });
  };

  return (
    <div className="h-screen font-['Poppins'] text-black overflow-hidden">
      {/* Navigation */}
      <nav className="navigation fixed top-8 right-20 w-4/5 flex items-center gap-12 text-sm z-10">
        <a href="#" className="text-black ">Men</a>
        <a href="#" className="text-black ">Women</a>
        <a href="#" className="text-black ">Customise</a>
        <div className="ml-auto flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-black ">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </a>
          <a href="#" className="text-black opacity-70 hover:opacity-100">My Account</a>
          <a href="#" className="text-black">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Credits Section */}
      <div className="credits fixed top-1/4 left-20 z-10 text-xs space-y-6">
        <div>
          <p className="font-medium mb-1 text-white">CREDITS</p>
          <p className="opacity-70  text-white">Agency: @wesayhi</p>
          <p className="opacity-70  text-white">At: @mahison.meta</p>
          <p className="opacity-70  text-white">Retouching: @twistedloupe</p>
        </div>
        <div>
          <p className="font-medium mb-1">WeSayHi Production Team:</p>
          <p className="opacity-70">@adellatucker</p>
          <p className="opacity-70">@danikiwimeier</p>
          <p className="opacity-70">@minniatur</p>
        </div>
      </div>

      {/* Main Slider */}
      <Swiper
        modules={[EffectCoverflow, Mousewheel, Thumbs, Pagination]}
        direction="vertical"
        effect="coverflow"
        mousewheel={true}
        loop={true}
        speed={1200}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        onSlideChange={handleSlideChange}
        className="h-full"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} className={`${product.background} relative flex justify-center items-center`}>
            {/* Product Image */}
            <img 
              src={product.image} 
              alt={`Product ${product.id}`} 
              className="product-image object-cover h-[85%] w-auto z-10"
            />

            {/* Product Info */}
            <div className="product-info absolute right-20 top-1/2 -translate-y-1/2 space-y-8">
              <div>
                <p className="text-sm opacity-70 mb-1">Colour:</p>
                <p className="text-lg font-medium">{product.color}</p>
              </div>
              
              <div>
                <p className="text-sm opacity-70 mb-1">ID: {product.productId}</p>
                <p className="text-4xl font-medium">{product.price}</p>
              </div>

              <div className="flex flex-col gap-4">
                <button className="px-16 py-4 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">
                  Style
                </button>
                <button className="px-16 py-4 bg-black/25 hover:bg-black/40 transition-colors text-white text-sm">
                  Place Bid
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute left-20 right-auto" />
      </Swiper>

      {/* Thumbnails */}
      <div className="fixed bottom-20 right-[25%] z-10 w-[200px]">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          slidesPerView={2}
          spaceBetween={10}
          className="thumbs-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-[60px] rounded-lg overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <img src={product.image} alt={`Thumbnail ${product.id}`} className="object-cover h-full w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Elements */}
      <div className="fixed bottom-10 right-[25%] z-10 text-sm font-light opacity-70">
        Next
        <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-10 left-20 z-10 flex gap-6 text-sm">
        <a href="#" className="text-white opacity-70 hover:opacity-100">IN</a>
        <a href="#" className="text-white opacity-70 hover:opacity-100">TW</a>
        <a href="#" className="text-white opacity-70 hover:opacity-100">YT</a>
        <a href="#" className="text-white opacity-70 hover:opacity-100">OS</a>
      </div>

      {/* Privacy Link */}
      <div className="fixed bottom-10 right-10 z-10 text-sm">
        <a href="#" className="text-white opacity-70 hover:opacity-100">Privacy</a>
      </div>
    </div>
  );
};

export default ProductSlider;
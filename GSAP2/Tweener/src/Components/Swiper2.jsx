import prod1 from '../assets/images/optim.png';
import prod2 from '../assets/images/mega.png'
import prod3 from '../assets/images/bumel.png';

const products = [
    {
      id: 1,
      image: prod1,
      background: "bg-gradient-to-b from-[#FE783D] to-[#121826]",
      color: "Blood Orange",
      price: "$1250",
      productId: "3534R4"
    },
    {
      id: 2,
      image: prod2,
      background: "bg-gradient-to-b from-[#00499D] to-[#121826]",
      color: "Navy Blue",
      price: "$1250",
      productId: "3535R4"
    },
    {
      id: 3,
      image: prod3,
      background: "bg-gradient-to-b from-[#DAB1C8] to-[#511990]",
      color: "Purple Rose",
      price: "$1250",
      productId: "3536R4"
    }
  ];

const TestSwiper = () => {
    return (
        <div className="h-screen font-['Poppins'] text-black overflow-hidden">

              {/* Navigation */}
            <nav className="navigation fixed top-8 right-20 w-4/5 flex items-center gap-12 text-sm z-10">
                <a href="#" className="text-black ">HOME</a>
                <a href="#" className="text-black ">ABOUT</a>
                <a href="#" className="text-black ">GALLERY</a>
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

            {/* Vertical Text */}
            <div className="absolute top-1/2  left-[18%] transform -rotate-90 -translate-x-96 text-black text-6xl font-bold">
                <h1>TRANSFORMERS</h1>
            </div>

            {/* Credits Section */}
            <div className="absolute top-60 left-60 mt-10 flex flex-col  text-black">
                <h1 className="font-semibold">OPTIMUS PRIME</h1>
                <p>Role : Autobot Leader</p>
                <p>Weapons : Ion Blaster, Energon Axe</p>
                <p>Special Move : Matrix Smash</p>
                <h1 className="font-semibold mt-4">Freedom is the right of all sentient beings</h1>
                <p>Skill : 9/10</p>
                <p>Strength : 10/10</p>
            </div>

            {/* Centered Image */}
            <div className="absolute top-1/4 left-1/2  transform -translate-x-1/2">
                <img src={prod1} alt="Product" className="h-[550px] w-auto" />
            </div> 

            {/* Color Section */}
            <div className="absolute top-1/4 right-80 text-black">
                <h1 className="font-semibold">COLOR:</h1>
                <p>Blood Orange</p>
                <h2 className="font-semibold mt-4">$1250</h2>
            </div>

            {/* Slider */}
            <div className="fixed bottom-40 right-[24%] w-[200px]">
                <div className='flex flex-row '>
                {products.map((product) => (
                    <div key={product.id} className="h-[60px] rounded-lg overflow-hidden cursor-pointer  opacity-40 hover:opacity-100 transition-opacity">
                    <img src={product.image} alt={`Thumbnail ${product.id}`} className="object-cover h-full w-full" />
                    </div>
                ))}
                </div>
            </div>

            <div className="fixed bottom-10 left-60 z-10 flex gap-6 text-sm">
                <a href="#" className="text-black ">IN</a>
                <a href="#" className="text-black ">TW</a>
                <a href="#" className="text-black opacity-70 ">YT</a>
                <a href="#" className="text-black opacity-70">OS</a>
            </div>
        </div>
    );
}

export default TestSwiper;
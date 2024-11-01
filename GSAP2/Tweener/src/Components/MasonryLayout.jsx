const imageUrls = [
  'https://i.pinimg.com/474x/4c/0d/9d/4c0d9dcf568cc943387cb5dd505a8eed.jpg',
  'https://i.pinimg.com/474x/e4/07/dc/e407dc0b647d94dc5545d4a1592b0eab.jpg',
  'https://i.pinimg.com/236x/c2/a1/67/c2a167234a5309b1e919ad7c1f293ce0.jpg',
  'https://i.pinimg.com/236x/31/3c/62/313c62c38bc4d10a596e22e26dc27a2b.jpg',
  'https://i.pinimg.com/236x/6d/c3/ea/6dc3ea5db8f7c0f27a6ed2c838aea654.jpg',
  'https://i.pinimg.com/236x/ae/0e/62/ae0e62e1287e6bdf8e7d9034aa8b829c.jpg',
  'https://i.pinimg.com/236x/4b/a8/fd/4ba8fd69ecc336eec125abe6a3dc1e9d.jpg',
  'https://i.pinimg.com/564x/27/2f/21/272f213794debeec34fde20ce8820584.jpg',
  'https://i.pinimg.com/474x/3b/0c/84/3b0c8465572f6744c087a71fac5cb7cc.jpg',
  'https://i.pinimg.com/564x/48/94/e9/4894e9304180a8381e5c41190b3dad0a.jpg',
  'https://i.pinimg.com/236x/33/f1/f5/33f1f53222029d8e10ec8efee77335b4.jpg',
  'https://i.pinimg.com/564x/64/49/bc/6449bcedee5688a991e64806fd5964c6.jpg',
  'https://i.pinimg.com/564x/da/1f/e9/da1fe905e6a946efff0e45455747799a.jpg',
];

const Gallery = () => {
  return (
    <div className="p-10 w-full h-screen ">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md break-inside-avoid">
            <img src={url} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

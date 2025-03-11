"use client";
import Image from "next/image";

const ProductGallery = () => {
  const productsIphone = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "Mulai dari Rp18.999.000",
      img: "/iphone15pro.png",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: "Mulai dari Rp12.499.000",
      img: "/iphone15.png",
    },
    {
      id: 3,
      name: "iPhone 14",
      price: "Mulai dari Rp11.999.000",
      img: "/iphone14.png",
    },
    {
      id: 4,
      name: "iPhone 13",
      price: "Mulai dari Rp8.749.000",
      img: "/iphone13.png",
    },
    {
      id: 3,
      name: "iPhone 14",
      price: "Mulai dari Rp11.999.000",
      img: "/iphone14.png",
    },
    {
      id: 4,
      name: "iPhone 13",
      price: "Mulai dari Rp8.749.000",
      img: "/iphone13.png",
    },
  ];

  const productsMacbook = [
    {
      id: 5,
      name: "MacBook Pro M4",
      price: "Mulai dari Rp27.999.000",
      img: "/macbook.jpg",
    },
    {
      id: 6,
      name: "MacBook Air",
      price: "Mulai dari Rp18.499.000",
      img: "/macbook-pro.jpg",
    },
    { id: 7, name: "Imac", price: "Mulai dari Rp 9.999.000", img: "/imac.jpg" },
    {
      id: 8,
      name: "MacBook Mini",
      price: "Mulai dari Rp27.999.000",
      img: "/macmini.jpg",
    },
    { id: 7, name: "Imac", price: "Mulai dari Rp 9.999.000", img: "/imac.jpg" },
    {
      id: 8,
      name: "MacBook Mini",
      price: "Mulai dari Rp27.999.000",
      img: "/macmini.jpg",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen ">
      {/* HEADER PRODUK */}
      <section className="container mx-auto p-6 flex-grow motion-preset-slide-right motion-duration-2000">
        <h1 className="text-2xl font-bold text-center mb-8 ">
          Pilih Produk Apple
        </h1>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {productsIphone.map((iphone, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md text-center "
            >
              <Image
                src={iphone.img}
                alt={iphone.name}
                width={200}
                height={200}
                className="mx-auto object-contain rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{iphone.name}</h2>
              <p className="text-gray-500">{iphone.price}</p>
              <button className="mt-3 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>

        <h3 className="flex justify-center items-center text-2xl font-bold m-6">
          Pilih Produk Macbook
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {productsMacbook.map((mac, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md text-center "
            >
              <Image
                src={mac.img}
                alt={mac.name}
                width={200}
                height={200}
                className="mx-auto object-contain rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{mac.name}</h2>
              <p className="text-gray-500">{mac.price}</p>
              <button className="mt-3 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductGallery;

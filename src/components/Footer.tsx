import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-100/80 font-sans dark:bg-gray-900 border border-gray-400 mt-3">
      <div className="container px-6 py-12 mx-auto bg-white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <img src="/images.png" width="130" height="110" alt="" className="" />
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row np"></div>
            <p className=" dark:text-gray-500 text-gray-600">
              iBex adalah Apple Premium Reseller terkemuka di Indonesia yang <br />
              mengkhususkan diri dalam produk-produk Apple dan berbagai macam <br />
              aksesoris pelengkap, software dan produk lainnya.
            </p>
            <p className=" dark:text-gray-500 text-gray-600">
              Jika Anda ingin bantuan atau memiliki masukan, <br />
              silahkan hubungi kami: Jam 09:00 - 18:00 <br />
              Email : customercare@erajaya.com Phone : 1500372 <br />
              WA : 0812 9077 7722
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white mt-10">Informasi</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-500 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Tentang Kami</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-500 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">FAQ</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-500 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Privasi</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white mt-10">Layanan</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Cara Pemesanan</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Cara Pembayaran</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Informasi Pengiriman</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pembatalan Transaksi</p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

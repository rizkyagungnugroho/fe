"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

export default function Layanan() {
  return (
    <nav className="  dark:bg-[#8a8a81]">
      <div className="font-bold text-center text-2xl py-6  text-gray-600 ">
        Ikuti kelas dan layanan lainnya di toko.
      </div>

      {/* Flex Container untuk Menempatkan Card Sejajar */}
      <div className="flex flex-wrap items-stretch justify-center gap-6 py-10 text-sm">
        {/* Data kartu */}
        {[
          {
            img: "/kirim.png",
            title: "Kirim atau ambil",
            desc: "Bebas biaya kirim dan ambil sendiri. Ambil pesenanmu di toko Ibex.",
          },
          {
            img: "/instore.png",
            title: "Cari toko terdekat",
            desc: "Belanja produk terbaru Apple. Temukan cabang iBex di dekatmu.",
          },
          {
            img: "/instore1.png",
            title: "Bantuan Untukmu",
            desc: "Bebas biaya kirim dan ambil sendiri. Ambil pesenanmu di toko Ibex.",
          },
          {
            img: "/instore2.png",
            title: "Penawaran terbaik hari ini",
            desc: "Untuk Belanja Online dan Click & PickUP.",
            sale: true,
          },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 275,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Pastikan semua kartu memiliki distribusi konten yang sama
            }}
          >
            <CardMedia sx={{ height: 250, width: "100%",}}>
              <Image src={item.img} alt={item.title} width={250} height={150} style={{ objectFit: "cover" }} />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              {item.sale ? (
                <p className="text-sm text-green-600 font-semibold">Sale</p>
              ) : (
                <p className="text-sm text-gray-600 font-semibold">IN STORE</p>
              )}
              <h1 className="font-semibold">{item.title}</h1>
              <p className="text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </nav>
  );
}

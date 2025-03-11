"use client";
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from "@mui/material";

export default function MediaCard() {
  return (
    <nav className=" dark:bg-[#8a8a81]">
      <div className="font-bold text-center text-2xl py-6 text-gray-600">Temukan layanan dan penawaran lainnya.</div>

      {/* Flex Container untuk Menempatkan 2 Card Sejajar */}
      <div className="flex flex-wrap items-center justify-center gap-6 py-10 text-sm">
        {/* Card 1 */}
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 150, width: 150 }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p className="text-sm text-gray-600 font-semibold">Pickup </p>

              <p className="text-sm">Kirim dan ambil Belanja online dan bebas biaya kirim </p>
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 150, width: 150 }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p className="text-sm text-blue-600 font-semibold">Financing </p>

              <p className="text-sm">
                {" "}
                Dapatkan Harga Spesial dan cicilan 0% <br /> Untuk produk-produk Apple.
              </p>
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 150, width: 150 }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p className="text-sm text-gray-600 font-semibold">Ibex Experience Days </p>
              <p className="text-sm">Maksimalkan Penggunaan produk apple anda bersama Apple expert</p>
            </Typography>
          </CardContent>
        </Card>
        {/* Card 4 */}
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 150, width: 150 }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p className="text-sm text-green-600 font-semibold">Sale</p>
              <p className="text-green-600 text-sm">Penawaran terbaik hari ini</p>
              <p className="text-sm">untuk Belanja Online dan Click & PickUP</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </nav>
  );
}

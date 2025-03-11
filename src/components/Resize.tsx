import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Image from "next/image";
import { Button } from "./ui/button";

export function Resize() {
  return (
    <div className="flex justify-center items-center h-screen border border-gray-500 mt-4 w-full max-w-[900px] mx-auto">
      {" "}
      <ResizablePanelGroup direction="horizontal" className="w-full max-w-900px] rounded-lg border md:min-w-[300px]">
        <ResizablePanel defaultSize={100} minSize={50} maxSize={80}>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden flex flex-col items-center">
            <span className="font-semibold py-3">MacBook Pro M4</span>
            <p className="py-6 ml-4 items-center">
              Bertenaga super berkat M4.
              <br /> Mulai Rp27.999.000
            </p>
            <Button>Beli Sekarang</Button>
            <div className="py-3">
              <Image src="/macbook.jpg" alt="Logo" width={350} height={175} />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={100} minSize={50} maxSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="relative w-full max-w-1xl mx-auto overflow-hidden flex flex-col items-center">
                <span className="font-semibold py-3">Mac Mini Pro 4</span>
                <p className=" py-3 ml-4 ">
                  Ukuran lebih kecil.Tenaga lebih besar.
                  <br /> Mulai Rp9.999.000
                </p>
                <div className=" items-center">
                  <Button>Beli Sekarang</Button>

                  <Image src="/macmini.jpg" alt="Logo" width={150} height={125} />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden flex flex-col items-center pt-9">
                <span className="font-semibold"> Apple Watch Series 10s </span>
                <p className="py-6">
                  Tipis dan tetap klasik. <br />
                  Mulai Rp6.599.000
                </p>
                <Button>Beli Sekarang</Button>
                <div className="py-3">
                  <Image src="/applewatch.jpeg" alt="Logo" width={100} height={125} />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Resize;

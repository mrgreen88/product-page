import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SelectedProductCard() {
  return (
    <div className="w-full border overflow-hidden h-52 max-h-52 flex items-start justify-between bg-slate-100">
      <div className="p-4 flex justify-between gap-2 w-1/3">
        <Image
          className="w-full object-cover rounded-t-md"
          src="https://example.com/image.jpg"
          width={50}
          height={100}
          alt="Product Image"
        />
      </div>
      <div className="flex flex-col gap-3 mt-4 w-2/3 text-gray-700 text-sm">
        <p className="text-sm">Price: $199.99</p>
        <p>Title: Product title</p>
        <p>Category: Electronics</p>
        <p>Quantity: 1</p>
        <Button variant={"outline"} size={"sm"}>
          Save for later
        </Button>
      </div>
    </div>
  )
}

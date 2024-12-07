import { Button } from "@/components/ui/button"
import Image from "next/image"
import paymentMethods from "@/paymentsMethod.json"
import { FloatingInput, FloatingLabel } from "@/components/ui/floating-input"

export default function Checkout() {
  return (
    <section className="flex border flex-col space-y-5 bg-slate-100 p-6">
      <h2 className="text-2xl font-semibold border-b pb-3 w-full">Total</h2>

      <div className="flex flex-col gap-2 text-sm">
        <p>Payment methods:</p>
        <ul className="flex items-center gap-1">
          {paymentMethods.map((item: any) => (
            <li key={item.id}>
              <Image
                src={item.icon}
                width={30}
                height={20}
                alt={item.id}
                className="rounded-sm"
              />
            </li>
          ))}
        </ul>
        <div className="relative mt-3">
          <FloatingInput id="floating-customize" />
          <FloatingLabel htmlFor="floating-customize">
            Got a discount code?
          </FloatingLabel>
        </div>
      </div>

      <div className="border-b pb-3 flex justify-between items-center text-xl">
        <h3>Sub-total</h3>
        <p>19.36</p>
      </div>
      <Button variant={"default"} className="uppercase font-medium">
        Checkout
      </Button>
    </section>
  )
}

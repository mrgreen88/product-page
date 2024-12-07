import Checkout from "@/app/components/checkout"
import SelectedProductCard from "@/app/components/selectedProductCard"

export default function Bagg() {
  return (
    <section className="flex gap-5 max-w-4xl h-[400px] m-auto mt-10">
      <article className="w-[65%] flex flex-col gap-5">
        <div className="flex items-center justify-between p-5 border bg-slate-100 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:font-light text-sm">
          <h3>My Bag</h3>
          <p>Items are reserved for 60 minutes</p>
        </div>
        <div>
          <SelectedProductCard />
        </div>
      </article>
      <article className="w-[35%]">
        <Checkout />
      </article>
    </section>
  )
}

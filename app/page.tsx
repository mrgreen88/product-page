import Header from "./components/header"
import Products from "./products/page"

export default function Home() {
  return (
    <section className="max-w-7xl m-auto">
      <Header title="Website Title" />
      <main>
        <Products />
      </main>
    </section>
  )
}

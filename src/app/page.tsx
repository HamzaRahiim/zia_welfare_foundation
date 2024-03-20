import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <main className="wrapper">
      <nav>
        <Header />
      </nav>
      <section className="flex-1">
        <h1>I am main body</h1>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

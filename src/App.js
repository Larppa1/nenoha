import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner";
import './App.css'
import Subtitle from "./components/Subtitle/Subtitle";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";

export default function App() {
  return (
    <div id="App">
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Subtitle title="Palvelut" />
        <section className="section">
          <h3>Oikolukeminen</h3>
          <p className="text">Tarjoamme kuluttajille sekä yritysasiakkaille ammattitaitoisia oikolukupalveluita. Oli sitten kyse uutisartikkelista, blogipostauksesta, tai vaikkapa pro gradusta — hoidamme kaikenlaiset oikolukemistyöt huolellisesti.</p>
          <p className="text">Hinnat määräytyvät sisällön määrän sekä kiireellisyyden mukaan, jolloin sinä päätät, meneekö nopeus vai hinta etusijalle.</p>
        </section>
        <Subtitle title="Ota yhteyttä" />
        <section className="section">
          <p className="text">Mikäli tarvitsette oikolukemispalvelua, ottakaa meihin yhteyttä alla olevan lomakkeen avulla!</p>
          <p className="text">Me Nenohalla pyrimme täydelliseen lopputulokseen, mutta aina kaikki eivät mene täysin nappiin. Virheiden ilmetessä voitte käyttää yhteydenottolomaketta myös virheiden ilmoituksiin.</p>
        </section>
        <Form />
      </main>
      <Footer />
      {/* <BackToTopBtn /> */}
    </div>
  )
}
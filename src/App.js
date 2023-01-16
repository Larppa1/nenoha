import Navbar from "./components/Navbar/Navbar"
import './App.css'
import { useEffect, useState } from "react"

export default function App() {
  const [btnColor, setBtnColor] = useState('bg-red-500');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <div id="App">
      <Navbar />
      <section className="bannerSection">
        <img className="banner" src="https://images.hdqwalls.com/wallpapers/abstract-simple-background-4k-lp.jpg" />
        <h1 className="mainText">Huolelliset oikolukupalvelut niin yksityishenkilöille, kuin myös yrityksille!</h1>
      </section>
      <main id="Main">
        <h2 className="h2">Palvelut</h2>
        <section id="Services" className="section">
          <h3 className="subtitle">Oikolukeminen</h3>
          <p className="text">Tarjoamme kuluttajille sekä yritysasiakkaille ammattitaitoisia oikolukupalveluita. Oli sitten kyse uutisartikkelista, blogipostauksesta, tai vaikkapa pro gradusta - hoidamme kaikenlaiset oikolukemistyöt huolellisesti. Hinnat määräytyvät sisällön määrän sekä kiireellisyyden mukaan, jolloin sinä päätät, meneekö nopeus vai hinta etusijalle.</p>
        </section>
        <h2 className="h2">Ota yhteyttä</h2>
        <section id="Contact" className="section">
          <p className="text">Mikäli tarvitsette oikolukemispalvelua, ottakaa meihin yhteyttä alla olevan lomakkeen avulla!</p>
          <p className="text">Me Nenohalla pyrimme täydelliseen lopputulokseen, mutta aina kaikki eivät mene täysin nappiin. Virheiden ilmetessä voitte käyttää yhteydenottolomaketta myös virheiden ilmoituksiin.</p>
          <form>
          <div className="radioSection">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yhteydenotto</span> 
                <input id="radio1" type="radio" name="radio-10" className="radio checked:bg-red-500" checked={checked1} onClick={() => {setBtnColor('bg-red-500'); setChecked1(checked1 ? false : true); setChecked2(checked2 ? false : true)}} />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Virheilmoitus</span> 
                <input id="radio2" type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={checked2} onClick={() => {setBtnColor('bg-blue-500'); setChecked2(checked2 ? false : true); setChecked1(checked1 ? false : true)}} />
              </label>
            </div>
          </div>
          <input type="text" placeholder="Nimi" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Sähköposti" className="input input-bordered w-full max-w-xs" />
          <textarea className="textarea textarea-bordered" placeholder="Viesti"></textarea>
          <button className={`sendBtn ${btnColor}`}>Lähetä</button>
        </form>
        </section>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p className="footerText">2023 - Nenoha / Eetu Ahonen Tmi</p>
        </div>
      </footer>
      <button className="backToTopBtn" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Takaisin ylös</button>
    </div>
  )
}
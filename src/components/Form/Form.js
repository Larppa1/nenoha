import { useState } from 'react';
import './Form.css'

export default function Form() {
  const [btnColor, setBtnColor] = useState('bg-blue-500');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <form>
      <section id="radioSection">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Yhteydenotto</span> 
            <input id="radio1" type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={checked1} onClick={() => {setBtnColor('bg-blue-500'); setChecked1(checked1 ? false : true); setChecked2(checked2 ? false : true)}} />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Virheilmoitus</span> 
            <input id="radio2" type="radio" name="radio-10" className="radio checked:bg-red-500" checked={checked2} onClick={() => {setBtnColor('bg-red-500'); setChecked2(checked2 ? false : true); setChecked1(checked1 ? false : true)}} />
          </label>
        </div>
      </section>
      <input type="text" placeholder="Nimi" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Sähköposti" className="input input-bordered w-full max-w-xs" />
      <textarea id="textarea" className="textarea textarea-bordered" placeholder="Viesti"></textarea>
      <button id="sendBtn" className={btnColor}>Lähetä</button>
    </form>
  )
}
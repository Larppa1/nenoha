import './BackToTopBtn.css'

export default function BackToTopBtn() {
  return (
    <button id="backToTopBtn" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Takaisin ylös</button>
  )
}
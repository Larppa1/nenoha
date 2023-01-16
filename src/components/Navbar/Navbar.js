import './Navbar.css'

export default function Navbar() {
  return (
    <nav id="Navbar">
      <div className="navbar bg-base-100 customNav">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Nenoha</a>
        </div>
        <div className="flex-4">
          <ul className="menu menu-horizontal px-1">
            <li><a onClick={() => {document.getElementById('Services').scrollIntoView({behavior: 'smooth', block: 'end'})}}>Palvelut</a></li>
            <li><a onClick={() => {document.getElementById('Contact').scrollIntoView({behavior: 'smooth', block: 'end'})}}>Ota yhteyttä</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
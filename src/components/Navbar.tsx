import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
<nav className="bg-neutral-700/90  w-full border-b border-default">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Utplogonuevo.svg/1280px-Utplogonuevo.svg.png" className="h-7" alt="Flowbite Logo" />
        <span className="self-center text-xl text-amber-50 font-semibold whitespace-nowrap">Kevin Rojas Cáceres</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <Link to="/" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Inicio (Lista)</Link>
        </li>
        <li>
          <Link to="/form" className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Registrar Alumnos</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

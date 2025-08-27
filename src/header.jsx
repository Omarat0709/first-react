function Header() {
  return (
    <header className = "header">
      <img className='header-logo' src="src/react-logo.png" alt="react logo" />
      <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-list-item'>Pricing</li>
        <li className='nav-list-item'>About</li>
        <li className='nav-list-item'>Contact</li>
      </ul>
    </nav>
    </header>
  )

}

export default Header;
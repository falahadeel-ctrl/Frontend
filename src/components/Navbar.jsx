import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-4'>
      <span className='navbar-brand fw-bold'>⚡ Solar Grid Monitor</span>
      <div className='d-flex gap-3'>
        <Link to='/' className='nav-link text-white'>Dashboard</Link>   {/*style Link tag useing <a> tag in css file */}
        <Link to='/logs' className='nav-link text-white'>Logs</Link>
        <Link to='/notes' className='nav-link text-white'>Notes</Link>
        <Link to='/settings' className='nav-link text-white'>Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar
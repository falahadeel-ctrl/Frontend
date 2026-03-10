import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav>
           < Link to='/'>Dashboard</Link>
           <Link to='/logs'>Logs</Link>
           <Link to='/notes'>Notes</Link>
           <Link to='/settings'>settings</Link>
        </nav>
    )
}

export default Navbar
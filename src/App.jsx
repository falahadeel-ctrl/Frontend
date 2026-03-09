import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Logs from './pages/Logs'
import Notes from './pages/Notes'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/logs' element={<Logs />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default App
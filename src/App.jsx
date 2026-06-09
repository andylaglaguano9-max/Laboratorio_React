import { Layout } from './componets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InicioPage, NosotrosPage, ContactosPage, TeamsPage, PersonajePage } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/personajes" element={<PersonajePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

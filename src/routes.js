import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componente/Menu';
import Rodape from 'componente/Rodape';
import PaginaPadrao from 'componente/PaginaPadrao';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';
import ScrollToTop from 'componente/ScrollToTop';


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          
        </Route>
        
        <Route path='posts/:id/*' element={<Post />}/>
        
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;

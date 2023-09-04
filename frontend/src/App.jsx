import { Route, Routes } from 'react-router';
import { Home } from './components/pages/home';
import { Skuespillere } from './components/pages/skuespillere';
import { Events } from './components/pages/forestillinger/events';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/actors' element={<Skuespillere />}/>
      <Route path='/events' element={<Events />}/>
    </Routes>
  );
}

export default App;

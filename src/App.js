import Login from './Login';
import Game from './Game';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen app bg-[#CADB7F]">
      <Routes>
        <Route path="/">
          <Route index element={<Login/>}/>
          <Route path='auth' element={<Game/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

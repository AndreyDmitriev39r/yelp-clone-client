import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';
import Update from './routes/Update';

const App = () => {  
  return (
    <div className='container'>      
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/restaurants/:id' Component={Detail}/>
          <Route exact path='/restaurants/:id/update' Component={Update}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

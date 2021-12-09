import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import TokenSelection from './components/TokenSelection';

function App() {

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route  path="/crypto_website" element={<Login/>}/>
          <Route  path="/dashboard" element={<Dashboard/>}/>
          <Route  path="/tokenSelection" element={<TokenSelection/>}/>
          <Route  path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

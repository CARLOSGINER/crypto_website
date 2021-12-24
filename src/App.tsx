import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

function App() {

  const [id, setId] = useState('');
  const [firstTimeUser, setFirstTimeUser] = useState(false)
  const [dataBaseCoins, setDataBaseCoins] = useState([]);
  const [token,setToken] = useState('');

  const getToken = (receivedToken:string) => {
    setToken(receivedToken)
  }

  const getFirstTimeUser = (isFirstTime:boolean) =>{
    setFirstTimeUser(isFirstTime);
  }

  const getID =(receivedID:string) =>{
    setId(receivedID)
  }

  const getDataBaseCoins=(DBCoins:any) =>{
    setDataBaseCoins(DBCoins)
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route  path="/crypto_website" element={<Login getID={getID} getToken={getToken} getFirstTimeUser={getFirstTimeUser} getDataBaseCoins={getDataBaseCoins} />}/>
          <Route  path="/dashboard" element={<Dashboard id={id} token={token} firstTimeUser={firstTimeUser} dataBaseCoins={dataBaseCoins}/>}/>
          <Route  path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

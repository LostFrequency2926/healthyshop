import logo from './logo.svg';
import './App.css';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

    const [{ user }, dispatch] = useStateValue();
    const auth = getAuth();
    onAuthStateChanged(auth, (userCredential) => {
      const uid = userCredential.email;
        console.log(uid);
      if (userCredential) {
        
        dispatch({
          type: actionTypes.SET_USER,
          user: uid,
        })
      }
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

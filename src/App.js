import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const onclick = () => {
    axios({
      url: "http://localhost:3002/api",
    }).then(
      (result)=>{
        console.log(result)
        alert(result.data.msg);
      }
    )
  }

  const onclick2 = () => {
    axios({
      url: "http://localhost:3002/api",
      method: 'post',
      data:  {msg: "ㅎㅎ어쩔"},

    }).then(
      (result)=>{
        console.log(result)
        alert(result.data.msg);
      }
    )
  }

  return (
    <div className="App">
      <button onClick={onclick}>gg</button>
      <button onClick={onclick2}>post</button>

    </div>
  );
}

export default App;

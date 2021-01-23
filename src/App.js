import './App.css';

// TODO: copy from https://codepen.io/leoespsanto/pen/zdgJER

function App() {
  const max = 15

  return Array(15).fill(0).map(_ => (
    <ul className="collection">
      <li className="collection-item avatar">
        {/* <img src="images/yuna.jpg" alt="" class="circle" /> */}
        <i class="material-icons circle green">insert_chart</i>
        <span className="title">Title</span>
        <p>First Line <br /> Second Line</p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    </ul>
  ));
}

export default App;

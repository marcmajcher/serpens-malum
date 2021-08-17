import './App.css';
import useGrid from './useGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const grid = useGrid(11);
  const skull = <FontAwesomeIcon className="nudge" icon={faSkull} />;
  const apple = <FontAwesomeIcon className="nudge" icon={faAppleAlt} />;

  return (
    <div className="App">
      <h1>Serpens Malum</h1>
      <div className="container">
        <div className="grid">
          {grid.map(row =>
            <div className="row" key={Math.random()}>
              {row.map(cell =>
                <div className="cell" key={Math.random()}>{
                  cell === -1 ? skull : cell === 0 ? apple : cell
                }</div>
              )}
            </div>)}
        </div>
      </div>
      <button onClick={() => grid.refresh()}>Refresh</button>
      <hr />
      <div>
        <h2><a href="https://github.com/marcmajcher/serpens-malum/blob/master/README.md">Rules</a></h2>
      </div>
    </div>
  );
}

export default App;

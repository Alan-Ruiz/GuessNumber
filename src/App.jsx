import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Challenge 1" targetTime={5} />
        <TimeChallenge title="Challenge 2" targetTime={10} />
        <TimeChallenge title="Challenge 3" targetTime={15} />
        <TimeChallenge title="Challenge 4" targetTime={20} />
      </div>
    </>
  );
}

export default App;

import {Route, Link, Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import Profiles from './profiles';
import HistorySample from './historysample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({location}) => <div>Not Found {location.pathname} </div>} />
      </Switch>
    </div>
  );
}

export default App;

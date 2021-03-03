import Game from './components/game/Game'
import Choose from './components/Choose'
import { Switch, Route, Redirect } from 'react-router-dom'
import Enemy from './components/Enemy';
function App() {
  
  return (
    <Switch>
      <Route exact path="/">
        {localStorage.getItem('side') ? 
        <Redirect to="/main"/> : 
        <Redirect to='/choose'/>}
      </Route>
      <Route path='/main'>
        {localStorage.getItem('enemy') === null ?  <Redirect to='/game_with'/> :  <Redirect to='/choose'/>}
      </Route>
      <Route path="/game_with" component={Game}/>
      <Route path='/choose' component={Choose}/>
      <Route path='/enemy' component={Enemy}/>
      
  </Switch>
  );
}

export default App;

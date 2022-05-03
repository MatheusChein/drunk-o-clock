import { Switch, Route } from 'react-router-dom';

import { Drink } from '../pages/Drink';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/drinks/:drinkId" component={Drink} />
      <Route component={NotFound} />
    </Switch>
  );
}

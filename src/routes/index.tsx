import { Switch, Route } from "react-router";

import { Drink } from "../pages/Drink";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFoud";

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/drinks/:drinkName' component={Drink} />
      <Route component={NotFound} />
    </Switch>
  )
}
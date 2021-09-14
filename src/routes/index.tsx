import { Switch, Route } from "react-router";
import { Drink } from "../components/Drink";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/drinks/:drinkName' exact component={Drink} />
    </Switch>
  )
}
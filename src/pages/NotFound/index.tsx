import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { NotFoundContainer } from "./styles";


export function NotFound() {
  return (
    <NotFoundContainer>
      <h2>404 error</h2>

      <h3>Ooops, we got lost somewhere :(</h3>

      <Link to='/'>
          <Button>
            Go back to safety
          </Button>
        </Link>
    </NotFoundContainer>
  )
}
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  const githubProfile = 'https://github.com/MatheusChein/';

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">Drunk o&apos;clock</Link>
        <p>
          Made by{' '}
          <a target="_blank" rel="noreferrer" href={githubProfile}>
            Matheus Chein
          </a>
        </p>
      </HeaderContent>
    </HeaderContainer>
  );
}

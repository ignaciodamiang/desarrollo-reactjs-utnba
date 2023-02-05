import { Link } from 'react-router-dom';
export function TopNavBar() {
  return (
    <nav className='top-navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/registry'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;

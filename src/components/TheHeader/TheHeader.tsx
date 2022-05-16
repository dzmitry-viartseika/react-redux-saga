import { NavLink } from 'react-router-dom';

function TheHeader(): JSX.Element {
    return (
        <nav className='navbar'>
            <NavLink to='/'
                className={({isActive}) => (isActive ? 'active': '')}
            >Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/todos'>Todos</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </nav>
    )
}
export default TheHeader;

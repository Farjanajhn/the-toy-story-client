
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import logo from './../../assets/logo.png';


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  const navItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
    
      <li className='font-semibold'><Link to="myToy">My Toy</Link></li>
    
        <li className='font-semibold'><Link to="/allToy">All Toys</Link></li>
    {
      user? <li className='font-semibold'><Link to="/add">Add a toy</Link></li>:""
        }
       <li className='font-semibold'><Link to='blogs'>Blogs</Link></li>
  </>
  return (

    <div className="navbar bg-indigo-400">
    <div className="navbar-start">
      <div className="dropdown">
          <label tabIndex={0}
            className="btn btn-ghost lg:hidden">
            
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
      
        </ul>
      </div>
        <div>
          <img className='rounded-xl' src={logo} alt="" />
          <p className='text-center font-semibold '>Toy Star</p>
       </div>
        
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navItems}
      </ul>
    </div>
      {
        user ?
        <div className="navbar-end">
            <button onClick={handleLogOut} className="btn mr-2">Log out</button> 
      </div>:
        <div className="navbar-end">
        <Link to="login"><a className="btn mr-2">Login</a></Link>
      </div>
          
      }
  </div>

  );
};

export default NavBar;
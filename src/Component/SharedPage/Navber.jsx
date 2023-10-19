import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FireBaseAuth/AuthProvider";


const Navber = () => {
  const {user , LogOut}=useContext(AuthContext)
  const navLink=<>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/Add'>Add_Product</NavLink></li>
  <li><NavLink to='/mycart'>My_Cart</NavLink></li>
  </>
  const hanadleLogOut= () => {

      LogOut()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.error(error);
      })
}

    return (
        <div>
          <div className="navbar bg-base-100 p-6 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center lg:mr-2">
    {
      user?.displayName
     }
       {
        user && <div className="avatar">
        <div className="w-10 lg:mr-3 lg:ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  src={user?.photoURL} alt="" />
        </div>
      </div>
       }
    </div>
    
    {
      user ? <button className="btn btn-ghost" onClick={hanadleLogOut} >Log Out</button> 
      :
      <Link to='/login'>
     <button className="btn btn-ghost">Login</button>
  </Link>
    }

    <Link to='/register'></Link>
  </div>
</div>  
        </div>
    );
};

export default Navber;
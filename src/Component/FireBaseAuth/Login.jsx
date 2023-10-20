import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BiLogoGoogle } from "react-icons/bi";
import Swal from "sweetalert2";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from "react";
import auth from "../../fireBase/firebase.config";
import { AuthContext } from "./AuthProvider";


const Login = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
      });
  }, []);
    const {logIn }=useContext(AuthContext)
    const provider=new GoogleAuthProvider();
    const [error,setError] = useState('')
    
    
    const location=useLocation();
    const nevigate=useNavigate();

  const handlLogin= e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form=new FormData(e.currentTarget)
   
    const password=form.get('password')
    const email=form.get('email')
    console.log(password,email);
    logIn(email,password)
    .then(result =>{
      console.log(result.user);
      nevigate(location ?.state ?location.state : '/')

    })
    .catch(error =>{
      console.error(error);
      setError(error.message)  
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: error.message,
      }); 
    })
  }

     const handleGoogleLogin =()=>{
              signInWithPopup(auth,provider)
              .then(result =>{
                console.log(result.user);
                nevigate(location ?.state ?location.state : '/')
                
              })
              .catch(error =>{
                console.error(error);
              })
     }

    return (
        <div>
        
         
            <div className="hero min-h-screen bg-base-200" data-aos="fade-down">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-gre">Login Here!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlLogin}>
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        
        <button onClick={handleGoogleLogin} className="btn bg-blue-500"><BiLogoGoogle className="text-2xl text-white"></BiLogoGoogle></button>
        <p className=" m-auto font-medium p-3"><Link to='/register' className="text-blue-700 underline">Have'nt you any id? Register</Link></p>
    </div>
      <p className='text-red-500'> {error}</p>
      <div>
        
      </div>
      
     
  </div>
</div>
        </div>
    );
};

export default Login;
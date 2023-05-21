

import { useState } from "react";
import { useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {

  const [error, setError] = useState();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle('Registration')
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (!email || !password) {
      setError('A USER CAN NOT SUBMIT AN EMPTY EMAIL AND PASSWORD FIELDS');
      return;
    }
   else if (password.length < 6) {
      setError('password should be more than 6 character')
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);




        //update profile
        updateUser(name, photo)
          .then(() => {
          console.log('profile updated')
          })
          .catch((error) => {
          console.log(error)
          })
        navigate('/')
      })
      .catch(error => {
      
        const errorMessage = error.message
        const errorCode = error.code;

       console.error(errorCode); 
        setError(errorMessage )
      })
 
  }
  return (
    <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center mb-2">Registration now!</h1>
     <img className="h-96 rounded-xl" src="https://www.leadquizzes.com/wp-content/uploads/2019/06/New-blog-graphic-16.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <p className="text-red-600">{error}</p>
              <Form onSubmit={handleRegister}>
              <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="email" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" placeholder="email" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
                <div className="form-control mt-6">
              
          <button type="submit"className="btn btn-primary">Submit</button>
                </div>
              
  
              </Form>
              <p>
                Already have an account?
                  
                  <Link  to='/login'>Login</Link> 
       
                </p> 
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Registration;
 import { useContext } from "react"; 

import { Form, Link, useLocation, useNavigate } from "react-router-dom";
 import { AuthContext } from "../Provider/AuthProvider"; 


const Login = () => {
/*   const [error, setError] = useState(); */
  const { signIn, signInWithGoogle,
    signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'
  
  //googlesignin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggeduser = result.user;
      console.log(loggeduser);

      navigate(from);
    })
    .catch(error => {
      console.log('error', error.massage);
     /*  setError(error.massage) */
  })
  }
  //handleSignIn with github
  const handleSignInWthGitHub = () => {
    
    signInWithGithub()
    .then(result => {
      const signedUser = result.user;
      console.log(signedUser);

      navigate('from')
    })
      .catch(error => {
      
 alert('error', error.massage);
     /*  setError(error) */
  })
  }
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
   signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate('from')

      })
      .catch(error => {
        console.error(error.massage);
        alert('error', error.massage);
    }) 
  }
  return (
    <div>
 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login for get amazing offer and grab your faviroute lego set</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
          {/*     <p>{error}</p> */}
              <Form onSubmit={handleSignIn}>
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
              </Form>
              <p>
                Do not have an account?
                  
                  <Link  to='/registration'>Register Now!</Link> 
       
              </p> 
              
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <button onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign In with google</button>
                </div> 
  <div className="divider lg:divider-horizontal">OR</div> 
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                  <button onClick={handleSignInWthGitHub} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign In with google</button>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;
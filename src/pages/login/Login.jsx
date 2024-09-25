import  { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
// import { userLogin } from '../../api';
import { userSignIn } from '../../apis/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  console.log(isAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    const data = await userSignIn({ email, password });

    if(data.code === 1){
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", data.token);
        navigate("/");
    }else {
        alert("Please check Your Credentials");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{backgroundColor: 'lightblue',height: '100vh'}}>
    <div className="container mt-5">
        <h1 style={{float : 'center'}}>App front end</h1><br/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div><br/>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
                <Link to='/register' style={{float:"right"}}>Register</Link>
              </form>
        
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Login;

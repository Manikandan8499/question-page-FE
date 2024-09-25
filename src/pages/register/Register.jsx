import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../../apis/auth";
// import { userRegister } from "../../api";
const initialState = {
name:"",
email:"",
password:"",
role:"User",
}
const Register = () => {
  const [formState, setformState] = useState(initialState);
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("User");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formState);
    // Handle form submission logic
     await userSignUp(formState);
     navigate("/login");
    // setformState(initialState);
    //console.log({name, email, password, role})

  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-100" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h1 className="card-title text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="roles" className="form-label">Roles</label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={formState.role}
                onChange={handleChange}
                required
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button><br/><br/>
            <Link to="/login" style={{float: "right"}} className="btn btn-light btn-outline-dark w-100">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext,useState } from 'react'
import { Layout } from '../layouts/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { toast , ToastContainer} from 'react-toastify';

export const Login = () => {

  const [credentials , setCredentials] = useState({
    // email:undefined,
    // password:undefined,
  });

  const {loading,error,dispatch} = useContext(AuthContext )
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setCredentials((prev)=>({
      ...prev,
      [e.target.name]: e.target.value 
    }))
  }

  const handleSubmit = async (e) =>{  
    
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    console.log(credentials);
    try{

      const res = await axios.post('http://127.0.0.1:8001/api/auth/login',credentials)
      
     // console.log(res.data);
     
      if(res.data){
        toast.success("Login Success !", {
          position: toast.POSITION.TOP_CENTER
        });
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        navigate("/");
        
    
      }else{

        dispatch({
          type:"LOGIN_FAILURE",
          payload : {message: "you are not allowed"}
        })
        toast.error("Login Failed !", {
          position: toast.POSITION.TOP_LEFT
        });
      }

    }catch(err){
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }


  }



  return (
    <Layout>
        <div className="container">

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your email & password to login</p>
                      </div>

                      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

                        <div className="col-12">
                          <label for="yourUsername" className="form-label">Email</label>
                          <div className="input-group has-validation">
                            {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="email" name="email" onChange={handleChange} className="form-control"  required/>
                            <div className="invalid-feedback">Please enter your email.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" onChange={handleChange}  className="form-control" id="yourPassword" required/>
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                            <label className="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                        </div>
                      </form>

                    </div>
                  </div>

                

                </div>
              </div>
            </div>

          </section>

          </div>
    </Layout>
  )
}

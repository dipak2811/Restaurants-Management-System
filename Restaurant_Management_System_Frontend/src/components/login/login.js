import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import Front from '../../images/FB.jpg'
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    // const [uname,setUname]=useState("")

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                if (res.data.message === "Login Successfull") {
                    history.push(`/hotels`);
                    // setLoginUser(res.data.user)
                    // setUname(res.data.user)
                }
                else {
                    alert(res.data.message);
                }
            });
    
    }


    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <div id="container">
                <div id="id1">
                    <img src={Front} height="668" width="700" alt="Banner" />
                </div>

                <div id="id2">
                    {/* <center><img src={AppLogo} alt="logo"/></center> */}
                    <center><h1 id="logoApp">Restaurant App</h1></center>
                    <div id="id3">

                        <center><h2>LOG IN</h2><br />
                            <div id="form">
                                <input id="input" type="text" name="email" placeholder="Enter UserEmail" value={user.email} onChange={handleChange} /><br />
                                <input id="input" type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange} />

                            </div>
                        </center>
                        <br />
                        <center>

                            <input type="submit" id="btn1" value="Register" onClick={() => history.push("/register")} />
                        </center><br />
                        <center>

                            <input type="submit" name="signin" id="btn" value="Login" onClick={login} />

                        </center><br />
                        <center>

                            <input type="submit" name="signin" id="btn" value="Login waiter" onClick={() => history.push("/loginwaiter")} />

                        </center>


                    </div>
                </div>
            </div>
        </div>
    )
};


export default Login;
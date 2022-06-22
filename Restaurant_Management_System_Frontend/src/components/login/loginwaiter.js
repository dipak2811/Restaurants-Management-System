import React from 'react';
import Front from '../../images/FB.jpg'
import './login.css';

class loginwaiter extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };
    }

    onChangeUser=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangePass=(event)=>{
        this.setState({password:event.target.value})
    }

    click=()=>{
        if(this.state.username === 'Dipak' && this.state.password === 'dipak123'){
            this.props.history.push(`/getorder`);
        }
        else{
            window.alert("Invalid Username or Password. Try Again!")
        }
    }


    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
           
            <div id = "container">
            <div id="id1">
                <img src={Front} height="668" width="700" alt="Banner"/>
            </div>

            <div id="id2">
                {/* <center><img src={AppLogo} alt="logo"/></center> */}
                <center><h1 id="logoApp">Restaurant App</h1></center>
                    <div id="id3">
                    
                    <center><h2>LOG IN FOR WATOR</h2><br/>
                    { this.state.clickable && 
                    <div>Username: {this.state.username} <br/>
                    Password: {this.state.password}</div>}
                    <div action="#" id="form">
                        <input type="text" name="username" placeholder="Enter Username"  onChange={(e)=>{this.setState({username: e.target.value})}} /><br/>
                        <input type="password" name="password" placeholder="Enter Password"  onChange={(e)=>{this.setState({password: e.target.value})}}/>
                        
                    </div>
                    </center><br/>
                    <center>
                        
                            <input type="submit" name="signin" id="btn" value="Login waiter" onClick={this.click} />
                       
                    </center><br/>
                    <center>
                    <input type="submit" name="signin" id="btn" value="Login User" onClick={() => this.props.history.push(`/login`)}  />
                    </center>

                </div>
            </div>
        </div>
        </div>
        )
    };
}

export default loginwaiter;
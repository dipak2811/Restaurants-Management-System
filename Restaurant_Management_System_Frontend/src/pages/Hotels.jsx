import React from 'react';
import '../styles/HotelStyle.css'
import data from '../data/data.json'
import RestaurantCard from '../components/RestaurantCard'
import { withRouter } from 'react-router-dom'

class Hotels extends React.Component {
    constructor(){
        super();
        this.state={
            list: data
        };
    }

    
    logout = ()=>{
        (
            this.props.history.push(`../login/login`)
        )
    }
   
       

    render(){
        const pay1 = {
            width: "80 %",
            height: "30px",
            margin: "15px",
            backgroundcolor: "#006400",
            color: "006400",
            fontsize: "16px",
        };

        return(
        <div>
            <div className="nav">
                <div id="logo">
                    <h2>Restaurant App</h2>
                </div>

                <div id="user">
                <div className="name">Welcome You are Logged In</div>
                <button style={pay1} onClick={() => this.logout()}>LOGOUT</button>

                    {/* <div className="profile">
                        <img src={User} alt="profile" id="img" height="45" width="45"/>
                    </div> */}
                </div>
            </div>
            
            <div className="maincart">

           
            {this.state.list.map(
                x => 
                    <RestaurantCard thumbnail_image={x.thumbnail_image} name = {x.name} cuisines = {x.cuisines} rating = {x.rating} reviews = {x.reviews}/>
                    
            )}

        
            
            </div>
        </div>
        )
    };
}

export default withRouter(Hotels);
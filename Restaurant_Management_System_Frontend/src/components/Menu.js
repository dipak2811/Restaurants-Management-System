import React from 'react'
import axios from 'axios';

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            price: '',
            quantity: 0,
            name:""
        }
    }
    order = () => {
        const Order = {
            name: this.props.name,
            price: this.props.price,
            quantity: this.props.quantity
        };

        axios.post("http://localhost:9002/order", Order)
            .then((res) => {
                alert("Odered successfully")
            });

    }
    render() {
        return (
            <div>
                <h3 className='fname'>
                    {this.props.name}
                </h3>
                <div className='desc'>
                    <p>{this.props.desc}</p>
                    <button className="btn" value={this.props.price} onClick={() => {this.props.action(this.props.price, this.props.name, this.state.quantity);this.order();}}>Order Now</button>
                </div>
                <br />
                <p className='amount'>{'\u20B9'}  {this.props.price} </p>

            </div>

        )
    }
}

export default Menu;
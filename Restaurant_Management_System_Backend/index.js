const express = require('express')

const cors = require('cors')

const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
// const userOrder = new mongoose.Schema({
//     id:Number,
//     name: String,
//     quantity: Number,

// })

// const Order = new mongoose.model("Order", userOrder)

const User = new mongoose.model("User", userSchema)

const orderDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number, 
        required: true
    }
});

const Order = new mongoose.model("orders", orderDetailsSchema);




//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})


app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.post("/order", async (req, res) => {
    try {
        const newOrder = new Order({
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        })
        let orderData = await newOrder.save();
        res.status(200).json({
            data: orderData,
            msg: "success..."
        })
    } catch (err) {
        console.log("err in posting order : ", err);
    }
})

app.get("/order", async (req, res) => {
    try {
        let cart = await Order.find({});
        res.status(200).json({
            msg: "success",
            data: cart
        })
    } catch (err) {
        console.log("err : ", err);
    }
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
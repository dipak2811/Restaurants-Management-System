import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Event() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9002/order/")
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const table1 ={
        bordercollapse: "collapse",
        borderspacing: "0",
        width: "100%",
        border: "1px solid #ddd"
      }
      
     const th={
        textalign: "left",
        padding: "16px"
      }
     const td ={
        backgroundcolor: "#f2f2f2"
      }
      
      const tr = {
        backgroundcolor: "#f2f2f2"
      }
    return (
       
        <>
            <table className="table table-hover" style={table1} border="2">
                <thead>
                    <tr style={tr}>
                        <th scope="col">FOOD NAME </th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((item) => (
                        <tr key={item._id} style={tr}>
                            <td style={td}>{item.name}</td>
                            <td style={td}>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
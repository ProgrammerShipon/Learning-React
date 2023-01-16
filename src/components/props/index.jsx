
import React from "react";

const MyProps = props => {
   console.log ('Mypro - : ', props)
   return <h1> I am {props.name} </h1>
}

export default MyProps;
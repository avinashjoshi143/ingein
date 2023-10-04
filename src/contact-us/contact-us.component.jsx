import React from "react";
import Input from "../input/input.component";
import './contact-us.styles.css';
import DropDown from "../drop-down/drop-down.component";
import Button from "../button/button.component";

const ContactUs = () => {
   const pstyle = {
        width : '50%',
        marginTop : '10px'
   }
    return(
        <div className="form-container">
            <h1>Contact Us</h1>
            <Input inpType="text" placeholder="First Name" />
            <Input inpType="text" placeholder="Last Name" />
            <DropDown id="Location" placeholder="Choose Location" values={["india","australia","usa"]} />
            <DropDown id="Services" placeholder="Choose Service" values={["india","australia","usa"]} />
            <Button ButtonStyle={true} value="Send message" color="blue" />
            <p style={pstyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, odio, culpa sint perspiciatis dolores harum incidunt impedit itaque, in eligendi rem laudantium quisquam earum labore. Distinctio quo minima in pariatur.</p>
        </div>
    )
}

export default ContactUs;
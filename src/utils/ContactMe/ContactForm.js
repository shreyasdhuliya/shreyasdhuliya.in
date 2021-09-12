import React,{useState} from 'react';
//import {useForm} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';

import emailjs from 'emailjs-com';

import {connect} from 'react-redux';
import {setAlert} from '../../store/actions/alert'
import PropTypes from 'prop-types';

require('dotenv').config();

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId= process.env.REACT_APP_TEMPLATE_ID;
const userId =  process.env.REACT_APP_USER_ID;

const ContactForm = ({onSentClose, setAlert}) => {

  const [formData, setFormData] = useState({
    email:"",
    message:"",
    disabled: false
  })




  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();  
    setFormData({...formData,disabled : true});
    let result = await emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
         return true
      }, (error) => {
        return false
      }); 

      if(result){
        //console.log("sent");
        
        setFormData({...formData,email:"", message:"", disabled : false});
        onSentClose();
        setAlert("Email was sent successfully! please expect a reply in 48 hrs.", "success");
      }
      else{
        setFormData({...formData,disabled : false});
        setAlert("Email was not sent! Please try again.", "error");
      }
  }
    

    return(
        <>
        <form id="contact-me-form" onSubmit={onSubmit} 
        style={{height:"100%", position:"relative", display:"flex", flexDirection:"column"}}>
       
             <TextField
          id="outlined-password-input"
          label="Email"
          placeholder="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          autoComplete="current-password"
          variant="outlined"
          style={{width:"100%"}}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />



      <div className="scroll-beautify" style={{flexGrow:"1", overflowY:"auto",  marginTop:'30px'}}>
        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Enter Message"
          multiline
          variant="outlined"
          className=" margin-label"
          style={{width:"100%"}}
          value={formData.message}
          name="message"
          onChange={onChange}
          required

        />
      </div>
        <Button
        type="submit"
        variant="contained"
        color="secondary"
        className=""
        style={{width:'100%', marginTop:"25px"}}
        disabled={formData.disabled}
      >
        Send
      </Button>
        </form>
        </>
    )
}


ContactForm.propTypes = () => ({
  setAlert: PropTypes.func.isRequired,
})


export default connect(null, {setAlert})(ContactForm)
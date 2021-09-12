import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import './contactMe.css';
import ContactForm from './ContactForm'
import {setContactMeDisplay} from '../../store/actions/contactme';

const ContactMe = ({setContactMeDisplay, displayContactForm}) => {
    //initial state of the contact me form is display:none/false 

    const contactMeContainer = {
        width:"calc(100vw - 30px)",
        height:"calc(100vh - 50px)",
        maxWidth:"500px",
        maxHeight:"500px",
        position:"fixed",
        zIndex:"10000",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        background: "white",
        borderRadius:"10px",
        padding:"50px 30px"
    }

    const contactMeBg = {
        width:"100vw",
        height:"100vh",
        position: "fixed",
        zIndex:"9999",
        top:"0",
        left:"0",
        background:"black",
        opacity:"0.4",
    }

    //const [isOpen, setIsOpen] = useState(displayContactForm)

    const onClickClose  = () => {
        
        document.getElementById("contactBg").classList.add("f4t0-2")
        document.getElementById("contactForm").classList.add("f1t0-0")
        setTimeout(function(){ setContactMeDisplay(!displayContactForm); }, 900);
    }

    
    return (
        <>
            <>
                <div id="contactBg" onClick={onClickClose} style={contactMeBg} className={`change-display ${displayContactForm ? "social-btn-0-to-op4" : "dis-none-imp"}`}>
                </div>
                <div id="contactForm" style={contactMeContainer} className={`change-display ${displayContactForm ? "social-btn-1" : "dis-none-imp"}`}>
                    <ContactForm onSentClose={onClickClose} />
                </div>
            </>
        </>
    )


}

ContactMe.protoTypes = {
    displayContactForm: PropTypes.bool.isRequired,
    setContactMeDisplay: PropTypes.func.isRequired,
}

const mapStateToProps = state =>  ({
    displayContactForm: state.contactme.displayContactForm
})

export default connect(mapStateToProps, {setContactMeDisplay})(ContactMe)

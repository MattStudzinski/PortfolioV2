import React from 'react';
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target
        const formData = new FormData(event.target);
    
        formData.append("access_key", "81bbd3c0-b825-4999-adc1-299bc4432fe7");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "Message sent!",
                icon: "success",
                customClass: {
                  popup: 'swal2-popup',
                  title: 'swal2-title',
                  content: 'swal2-content',
                  confirmButton: 'swal2-confirm',
                  cancelButton: 'swal2-cancel'
                },
                buttonsStyling: false // Disable default button styling
              }).then(() => {
                form.reset()
              });
        }
      };

    return (
        <section id='contact' className='contact'>
            <form onSubmit={onSubmit} className='contact__form'>
                <h1 className='contact__form-title'>Lets collaborate!</h1>
                <div className='contact__form-box'>
                    <label className='contact__form-label'>Full Name</label>
                    <input className='contact__form-input' type='text' placeholder='Enter your name' name='name' required/>
                </div>

                <div className='contact__form-box'>
                    <label className='contact__form-label'>Email Address</label>
                    <input className='contact__form-input' type='email' placeholder='Enter your email' name='email' required/>
                </div>

                <div className='contact__form-box'>
                    <label className='contact__form-label'>Message</label>
                    <textarea className='contact__form-input' name="message" id="contact__form-text-area" placeholder='Message me!' required></textarea>
                </div>
                <button className='contact__form-send-button' type='submit'>Send Message</button>
            </form>
        </section>
    );
};

export default Contact;

import Swal from 'sweetalert2'
import ContactPhone from '../svg/ContactPhone';
import ContactGit from '../svg/ContactGit';
import ContactLinkedin from '../svg/ContactLinked';

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
          <h1 className='contact__section-title'>Contact</h1>
            <div className='contact__container'>
                <div className='contact__image-container'>
                    <h1 className='contact__title'>Let's Collaborate!</h1>
                    <div className='contact__link-container'>
                    <a href='https://github.com/MattStudzinski' target='_blank' rel='noopener noreferrer'> <ContactGit /> </a>
                    <a href= 'https://www.linkedin.com/in/mattstudzinski' target='_blank' rel='noopener noreferrer'> <ContactLinkedin /> </a>
                    </div>
                    <h2 className='contact__contact-number'><ContactPhone />(425) 231-9749</h2>
                    <img src="https://static.vecteezy.com/system/resources/previews/004/257/968/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg" alt="Abstract Background" className='contact__image' />
                </div>
                <form onSubmit={onSubmit} className='contact__form'>
                  <h1 className='contact__form-title'>Contact Me</h1>
                    <div className='contact__form-box'>
                        <input className='contact__form-input' type='text' placeholder='NAME' name='name' required/>
                    </div>
                    <div className='contact__form-box'>
                        <input className='contact__form-input' type='email' placeholder='EMAIL' name='email' required/>
                    </div>
                    <div className='contact__form-box'>
                        <textarea className='contact__form-input' name="message" id="contact__form-text-area" placeholder='MESSAGE' required></textarea>
                    </div>
                    <button className='contact__form-send-button' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
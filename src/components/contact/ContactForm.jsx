import '../contact/contactform.css'
export default function ContactForm(){
    return (
        <div className='body-contact'>
        <div className="contact-container">
 
        <h1 className="wap">Contact Us</h1>
        <p className="c-subtitle">Have a question ? Send us a message !</p>
 
        <form>
          <div className="f-g">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
 
          <div className="f-g">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
 
          <div className="f-g">
            <label>Message</label>
            <textarea placeholder="Write your message here..." />
          </div>
 
          <button className="submit-btn" type="submit">Send Message</button>
        </form>
 
      </div>
        </div>
    )
}
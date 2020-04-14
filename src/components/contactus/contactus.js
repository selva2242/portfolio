import React, { Component } from 'react';
import axios from "axios";
export default class ContactUs extends Component {

    
  render() {
      // Success message
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                <h1><span>Get In Touch.</span></h1>
                </div>
                <div className="ten columns">
                <p className="lead">
                    Want to colloborate? Send me a message! 
                </p>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                {/* form */}
                <form  id="contactForm" name="contactForm">
                    <fieldset>
                    <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size={35} id="contactName" name="contactName" />
                    </div>
                    <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size={35} id="contactEmail" name="contactEmail" />
                    </div>
                    <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols={10} rows={5} id="contactMessage" name="contactMessage" defaultValue={""} />
                    </div>
                    <div>
                        <button className="submit">Submit</button>
                    </div>
                    </fieldset>
                </form> {/* Form End */}
                {/* contact-warning */}
                <div id="message-warning"> Error boy</div>
                {/* contact-success */}
                </div>
                <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                </div>
                <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                    {resumeData.name}<br />
                    {resumeData.email}<br />
                    {resumeData.place}<br />
                    <span>{resumeData.phone}</span>
                    </p>
                </div>
                </aside>
            </div>
        </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
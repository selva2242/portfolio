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
                    Want to collaborate? 
                    Drop a mail to selva2242@gmail.com
                </p>
                </div>
            </div>
            
        </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
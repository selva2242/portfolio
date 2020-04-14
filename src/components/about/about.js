import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                      {resumeData.aboutMe}
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{resumeData.email}</span><br />
                            <span>{resumeData.phone}</span><br />
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                            <a href={resumeData.resumeLink} className="button"><i className="fa fa-eye" />Resume</a>
                        </p>
                        </div>
                    </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
            </section>

      </React.Fragment>
    );
  }
}
import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          <footer>
            <div className="row">
            <div className="twelve columns">

                <ul className="social-links">
                    <li><a href={resumeData.github}><i className="fa fa-github"></i></a></li>
                    <li><a href={resumeData.linkedin}><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>

            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

            </div>
        </footer> 
      </React.Fragment>
    );
  }
}
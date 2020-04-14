import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
                <section id="resume">
                    {/* Education
                    ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {resumeData.Education.map((Institute, i)=>
                                <div className="row item" key={i}>
                                <div className="twelve columns">
                                <h3>{Institute.Qualification}</h3>
                                <p className="info"> {Institute.college} <span>•</span> {Institute.location} <span>•</span> <em className="date">{Institute.Duration_From} - {Institute.Duration_To}</em></p>
                                <p>
                                    CGPA {Institute.CGPA}
                                </p>
                                </div>
                            </div> 
                            )}
                        
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
                    ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {resumeData.work.map((companies, i) =>
                                <div className="row item" key={i}>
                                <div className="twelve columns">
                                <h3>{companies.company}</h3>
                            <p className="info">{companies.Designation} <span>•</span> {companies.location} <span>•</span> <em className="date">{companies.Duration_From} - {companies.Duration_To} </em> </p>
                                <p>
                                    {companies.Description}
                                </p>
                                </div>
                            </div>
                        )}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
                    ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <p>
                        </p>
                        <div className="bars">
                            <ul className="skills">
                            <li><span className="bar-expand angular" /><em>React</em></li>
                            <li><span className="bar-expand react" /><em>Angular</em></li>
                            <li><span className="bar-expand node" /><em>Node js</em></li>
                            <li><span className="bar-expand express" /><em>Express js</em></li>
                            <li><span className="bar-expand mongoDB" /><em>MongoDB</em></li>
                            </ul>
                        </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
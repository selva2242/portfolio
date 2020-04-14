import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
      let workData = this.props.workData;
    return (
      <React.Fragment>
          <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {
                            workData.works.map((work,i)=>
                            <div className="columns portfolio-item" key={i}>
                            <div className="item-wrap">
                                <a href={work.modal} title>
                                <img alt="" src={work.img} />``
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                    <h5>{work.Title}</h5>
                                    <p>{work.Type}</p>
                                    </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                                </a>
                            </div>
                            </div>
                        )}
                    </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup
                        --------------------------------------------------------------- */}
                    {
                        workData.works.map((work,i)=>
                            <div id={work.modalId} className="popup-modal mfp-hide" key={i}>
                            <img className="scale-with-grid" src={work.modalImg} alt="" />
                            <div className="description-box">
                                <h4>{work.Title}</h4>
                                <p>{work.description}</p>
                                <span className="categories"><i className="fa fa-tag" />{work.Type}</span>
                            </div>
                            <div className="link-box">
                                <a href={work.link}>{work.detail}</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                            </div>
                        )
                    }

                </div> {/* row End */}
            </section> {/* Portfolio Section End*/}
            
      </React.Fragment>
    );
  }
}
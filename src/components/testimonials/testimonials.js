import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let testimonialData = this.props.testimonialData;
    return (
      <React.Fragment>
          <section id="testimonials">
            <div className="text-container">
                <div className="row">
                <div className="two columns header-col">
                    <h1><span>Inspired Testimonials</span></h1>
                </div>
                <div className="ten columns flex-container">
                    <div className="flexslider">
                    <ul className="slides">
                        {testimonialData.quotes.map((quotes,i)=>
                        <li key={i}>
                        <blockquote>
                            <p>{quotes.quote}</p>
                            <cite>{quotes.author}</cite>
                        </blockquote>
                        </li>)}
                    </ul>
                    </div> {/* div.flexslider ends */}
                </div> {/* div.flex-container ends */}
                </div> {/* row ends */}
            </div>  {/* text-container ends */}
        </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}
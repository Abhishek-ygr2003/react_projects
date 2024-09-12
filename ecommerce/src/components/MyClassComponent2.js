import React, { Component } from 'react';

export default class MyClassComponent2 extends Component {
  constructor() {
    super();
    this.state = {
      sname: 'Indira',
    };
  }

  render() {
    return (
      <div>
        <center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/w8q0C-C1js4?si=vFYAMbzDCaX7w6NQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3> Welcome {this.state.sname}, for React "State" </h3>
        </center>
      </div>
    );
  }
}

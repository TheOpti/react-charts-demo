import React, { Component } from 'react';


class Main extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello</h1>
        <p className="lead">
          PoC and research for charting library meeting our demands.
        </p>
        <hr className="my-4" />
        <p>Requirements for library:</p>
        <ul className="list-group">
          <li className="list-group-item">
            Ability to customize tooltip and set our own styles
          </li>
          <li className="list-group-item">
            Different styling for lines on a chart - some lines are continuous and some are dotted
          </li>
          <li className="list-group-item">
            Minimap under a chart with possibility to resize it and create something called "sliding window"
          </li>
          <li className="list-group-item">
            Thick constant line representing maximum value
          </li>
          <li className="list-group-item">
            Ability to select a fragment of a chart to get more detailed view
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
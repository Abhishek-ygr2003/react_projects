import React, { Component } from 'react';

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>Student Data</h2>
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Raju</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Harish</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Darpi</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

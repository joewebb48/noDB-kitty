import React, { Component } from 'react';

export default class Flex extends Component {
  render() {
    return (
      <div className='container'>
        {/* <!-- columns should be the immediate child of a .row --> */}
        <div className='row'>
          <div className='one column'>One</div>
          <div className='eleven columns'>Eleven</div>
        </div>

        {/* <!-- just use a number and class 'column' or 'columns' --> */}
        <div className='row'>
          <div className='two columns'>Two</div>
          <div className='ten columns'>Ten</div>
        </div>

        {/* <!-- there are a few shorthand columns widths as well --> */}
        <div className='row'>
          <div className='one-third column'>1/3</div>
          <div className='two-thirds column'>2/3</div>
        </div>
        <div className='row'>
          <div className='one-half column'>1/2</div>
          <div className='one-half column'>1/2</div>
        </div>
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dave Gamache</td>
              <td>26</td>
              <td>Male</td>
              <td>San Francisco</td>
            </tr>
            <tr>
              <td>Dwayne Johnson</td>
              <td>42</td>
              <td>Male</td>
              <td>Hayward</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

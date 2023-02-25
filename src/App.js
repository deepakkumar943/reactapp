import React, { Component } from 'react'
import plan from './plan';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid my-5' >
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg rounded p-3">
            <h1 className='text-center ok'>todays</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" placeholder='write plain'  className='form-control' />
              </div>
              <div className="col-2">
                <button className="btn btn-success px-5 font-weight-bold">Add</button>
              </div>
              <div className="containe-fluid">
                <ul className='list-unstyled row m-5'>
                  <plan/>
                </ul>
              </div>
            </div>
            


          </div>
        </div>
        
      </div>
    )
  }
}



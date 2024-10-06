import React from 'react'
import Header from './Header'
import "./styles.css"

const Blog = () => {
  return (
    <>
        <Header />
        <div className='blog'>
            <h1>Pricing</h1>
            <p>Quickly build effective pricing table for your potential cutomers wuth this bootstrap example.it's built deafult bootstrap components and utilities with little cutomization</p>
            <div className='cards'>
              <div className="card text-center">
                <div className="card-header">
                  <h2>Free</h2>
                </div>
                <div className="card-body">
                  <h1 className="card-title">0$<span className='text-secondary'>/mo</span> </h1>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary text-primary  bg-white">Sign up fro free</a>
                </div>
                <div className="card-footer text-muted">
                  2 days ago
                </div>
              </div>

              <div className="card text-center">
                <div className="card-header">
                  <h2>Pro</h2>
                </div>
                <div className="card-body">
                <h1 className="card-title">20$<span className='text-secondary'>/mo</span> </h1>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Get started</a>
                </div>
                <div className="card-footer text-muted">
                  2 days ago
                </div>
              </div>

              <div className="card text-center">
                <div className="card-header">
                  <h2>Enterprise</h2>
                </div>
                <div className="card-body">
                  <h1 className="card-title">39$<span className='text-secondary'>/mo</span> </h1>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Contact Us</a>
                </div>
                <div className="card-footer text-muted">
                  2 days ago
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Blog

import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p class="footer-subscription-heading">
                Sign up to my newsletter!
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>SUBMIT</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-item">
                    <Link to='/'>Home</Link>
                </div>
                <div className="footer-link-item">
                    <Link to='/services'>Services</Link>
                </div>
                <div className="footer-link-item">
                    <Link to='/products'>Products</Link>
                </div>
                <div className="footer-link-item">
                    <Link to='/sign-up'>Sign Up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
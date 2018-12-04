import React, { Component } from 'react'
import Navbar from '../../components/NavbarNoSearch/NavbarNoSearch'
import styles from './ContactUsPage.module.css'

class ContactUsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['content']}>

                    <Navbar
                        home={this.props.home}
                    />
                    
                    <div>contact us page</div>

                    <span className={styles['footer']}>
                        <span className={styles['footer-links']}>
                            <button className={styles['about-link']} onClick={this.props.about}>About</button>
                            <button className={styles['contact-us-link']} onClick = {this.props.contact}>Contact Us</button>
                        </span>


                    </span>


                </div>
            </div>
        );
    }
}

export default ContactUsPage;
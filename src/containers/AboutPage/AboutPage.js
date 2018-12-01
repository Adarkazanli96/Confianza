import React, { Component } from 'react'
import Navbar from '../../components/NavbarNoSearch/NavbarNoSearch'
import styles from './AboutPage.module.css'

class AboutPage extends Component {
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
                        nameSearchBarValue={this.state.journalistName}
                        nameSearchBarChange={(event) => this.setNameHandler(event)}
                        searchBarClicked={this.updateJournalist}
                    />

                    <span className={styles['footer']}>
                        <span className={styles['footer-links']}>
                            <button className={styles['about-link']} onClick={this.props.switchToAboutPageHandler}>About</button>
                            <button className={styles['add-journalist-link']}>Add Journalist</button>
                        </span>


                    </span>


                </div>
            </div>
        );
    }
}

export default AboutPage;
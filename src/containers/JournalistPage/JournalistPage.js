import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import JournalistIcon from '../../components/JournalistIcon/JournalistIcon'
import Rating from '../../components/Rating/Rating'
import Reviews from '../../components/Reviews/Reviews'
import SearchBar from '../../components/SearchBar/SearchBar'


class JournalistPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                { id: "kjsf", username: 'Chocolate Thunder'},
                { id: "klsd", username: '420 Blz It'},
                { id: "ksjf", username: 'Dwayne The Rock Johnson'}
            ]
        }
    }
    

render(){
    
    return (
        <div>
            <Logo />
            <SearchBar/>
            <JournalistIcon />
            <Rating />
            <Reviews reviews = {this.state.reviews}/>
        </div>
    );}
}

export default JournalistPage;
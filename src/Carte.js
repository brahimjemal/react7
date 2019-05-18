import React from 'react';

class Carte extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        let bc="blue"
        if (this.props.gender=="female"){
            bc="yellow"
        }

        return (
    <div  className="carte" style={{borderColor: bc}}>
        <img src={this.props.imgurl} />
        <h1>{this.props.name}</h1>
    </div>            
        ); 
    }
}
export default Carte

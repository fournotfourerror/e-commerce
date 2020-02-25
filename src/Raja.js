import React from 'react';


export default class Raja extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    changeState(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        var style={
            color:'red',
            background:'yellow'
        }
        return (
            <div>
            <h2 style={{color:"blue"}}> {this.state.count} </h2> 
            <button onClick={()=>this.changeState()}> Click Here </button>
            </div>
        )
    }
}

// function Raja(p){
//     return(
//         <div>
//             <h2> {p.name} and best friend is {p.bestfriend} </h2>
//         </div>
//     )
        
// }

// export default Raja;
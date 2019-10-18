import React from 'react';


const Card = (props) => {
    console.log(props);
    return (
        
        <div className ="bg-light-green dib br3 pa3 ma2 grow">
            <img src ={`https://robohash.org/${props.robot.id}?50x50`} alt='robots'/>
            <div>
                <h2>{props.robot.name}</h2>
                <p>{props.robot.email}</p>
            </div>
        </div>
    )
}
export default Card;
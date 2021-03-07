
import React from 'react';
import styled from 'styled-components';

const ElephantsGal = (props)  => {
    return (
        <ElephantsList>
        {props.Elephants.map(item => (
          <Channel>
          
              <img src={item.image1} alt=""/>
              <img src={item.image22} alt=""/>
            
          </Channel>
        ))}
      </ElephantsList>
    )
}

export default ElephantsGal


const ElephantsList = styled.div`
 align-items: center;
 padding: 250px;
 display: flex;
 justify-items: center;
 justify-content: space-between
 

`

const Channel = styled.div`
width: 250px;
height: 250px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: inset 5em 1em yellow ;
border-radius: 25px;


 img {
    width: 350px;
    height: 200px;
    border-radius: 30px;
    display: flex;
    box-shadow: 10px 10px 8px #888888;


 }

 img:hover {

    opacity: 0.3;
 }
`


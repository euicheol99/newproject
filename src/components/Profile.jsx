import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;
    height: 300px;
    background:#e3edf7;
`

const Name = styled.div`
    margin-top: 50px;
    font-size: 35px;
    font-weight: bold;
    color:rgb(0, 0, 0);
`
const Age = styled.div`
    margin-top: 30px;
    font-size: 30px;
    color:rgb(92, 8, 92);
`

const IsOnline = styled.div`
    margin-top: 30px;
    font-size: 30px;
    color:rgb(0, 0, 0);
`
const Profile = ({list}) => {
 
    if(list.isOnline === 'on'){
    return (
      <Container>
        <Name>{list.name}</Name>
        <Age>나이 : {list.age}</Age>
        <IsOnline> 🟢 온라인 상태입니다.</IsOnline>
      </Container>
    )
  } else {
    return (
      <Container>
        <Name>{list.name}</Name>
        <Age>나이 : {list.age}</Age>
        <IsOnline> 🔴 오프라인 상태입니다.</IsOnline>
      </Container>
    )
  }
 
  
  
}

export default Profile

import React from 'react'
import Profile from './Profile'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
`

const ProfileList = ({list}) => {
  return (
    <Container>
        {list.map((list, index) => <Profile key={index} list = {list} />)}
    </Container>
  )
}

export default ProfileList

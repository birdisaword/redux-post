import React from 'react';
import styled from 'styled-components'

function AuthorSection(author, photo, name, nickname) {
  return (
    
    <Container>
        <img className="photo" src={author.photo} />
        <div className="name"> {author.name} </div>
        <div className="nickname"> {author.nickname} </div>
    </Container>
  
  );
}

export default AuthorSection;

const Container = styled.div`
height: 100px;
width: 200px;
background: grey;
`
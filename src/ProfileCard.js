import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const Avatar = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Title = styled.p`
  color: gray;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #45a049;
  }
`;

const ProfileCard = ({ name, title, avatar }) => (
  <Card>
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <CardBody>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Button>Contact</Button>
    </CardBody>
  </Card>
);

export default ProfileCard;
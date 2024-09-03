// BlogCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: block;
  margin-top: 8px;
`;

const BlogCard = ({ title, content, link }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ReadMoreLink href={link} target="_blank" rel="noopener noreferrer">
        Read More
      </ReadMoreLink>
    </CardContainer>
  );
};

export default BlogCard;

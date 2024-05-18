import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_CHARITY = gql`
  query getCharity($id: ID!) {
    getCharity(id: $id) {
      id
      name
      description
      url
      donations
    }
  }
`;

const CharityDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARITY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, description, url, donations } = data.getCharity;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit website</a>
      <p>Donations: ${donations}</p>
      {/* Implement a donation form here */}
    </div>
  );
};

export default CharityDetail;

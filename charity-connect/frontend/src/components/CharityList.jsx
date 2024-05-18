import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CHARITIES = gql`
  query getCharities {
    getCharities {
      id
      name
      description
      url
    }
  }
`;

const CharityList = () => {
  const { loading, error, data } = useQuery(GET_CHARITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Charities</h2>
      <ul>
        {data.getCharities.map(({ id, name, description, url }) => (
          <li key={id}>
            <Link to={`/charity/${id}`}>
              <h3>{name}</h3>
            </Link>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Visit website</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityList;

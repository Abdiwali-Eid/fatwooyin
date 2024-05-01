import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { Authorgridhome } from '../../styles/author/Authorgridhome';

function AuthorGrid({ authors }) {
  return (
    <Authorgridhome>

      {authors.map((item) => (
        <AuthorItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          profileImage={item.profileImage}
        />
      ))}
    </Authorgridhome>
  );
}

export default AuthorGrid;

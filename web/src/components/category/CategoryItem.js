import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button
        to={`/mawduucyo/${slug.current}`}
        variant={buttonTypes.secondary}
        style={{ backgroundColor: '#79ade0' }}
      >
        Gudaha u gal
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;

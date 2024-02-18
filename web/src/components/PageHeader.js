import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, description, children, className }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle style={{ color: 'black', paddingLeft: '10px' }}>
          {title}
        </SectionTitle>
        <ParagraphText style={{ color: 'black', paddingLeft: '10px' }}>
          {description}

          {children}
        </ParagraphText>
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;

import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    text-align: center;
    background-color: rgb(85, 128, 170);
    border-radius: 10px;
  }
  .footer__socialList {
    margin-top: 1rem;
    padding-bottom: 10px;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .profileImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
    margin-top: 10px;
  }
  .name {
    margin-bottom: 1rem;
  }
  .bio {
    margin: 0 auto;
    max-width: 500px;
  }
  .hr {
    margin: 3rem 0;
    color: var(--gray);
  }
`;

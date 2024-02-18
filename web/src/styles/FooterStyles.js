import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background-color: var(--black-2);
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer__text {
    margin-top: 1rem;
    max-width: 400px;
    text-align: center;
  }

  .footer__menuList,
  .footer__socialList {
    display: flex; /* Change to flex to display items horizontally */
    margin-top: 1.5rem;
    padding: 0;
    list-style: none;
  }

  .footer__menuList li,
  .footer__socialList li {
    margin: 0 1rem;
  }
  .horizontal{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .horizontal{
      display: inline-block;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  .footer__menuList a,
  .horizontal
  .footer__socialList a {
    color: var(--white-1);
    font-size: 1.6rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer__menuList a:hover,
  .footer__socialList a:hover {
    color: var(--white-1);
  }

  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;

import styled from 'styled-components';

const OrderItemStyles = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 75px 75px;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.5rem;
  }

  button + button {
    margin-left: 1rem;
  }
  .remove {
    background: none;
    color: var(--tan);
    font-size: 2rem;
    position: absolute;
    top: 25%;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 85px 70px;
`;

export default OrderItemStyles;

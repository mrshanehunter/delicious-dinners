import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2.5vw;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  margin: 3vw 0.5vw;
  @media (max-width: 600px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2.5vw;
  grid-template-columns: 1fr 1fr;
  margin-top: 3vw;
`;

// Single grid item for home page
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    height: auto;
    font-size: 0;
  }
  p {
    transform: rotate(-2.5deg) translateY(-50%);
    position: absolute;
    width: 75%;
    left: 0;
    text-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  img.loading {
    --shine: var(--white);
    --background: var(--silver);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    animation: shine 1s infinite linear;
  }
`;

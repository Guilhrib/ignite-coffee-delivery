import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;
  }
`
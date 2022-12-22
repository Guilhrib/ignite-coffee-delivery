import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.1375rem;
    text-align: center;
    margin: 0 1.25rem 2.0625rem 1.25rem;
  }
`
export const CardTags = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin: 0.75rem 0 1rem 0;

  div {
    padding: 0.25rem 0.5rem;
    border-radius: 15px;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
`

export const CardControl = styled.div`
  display: flex;
  gap: 1.4375rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PriceLabel = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;

  display: flex;
  align-items: center;

  ::before {
    content: 'R$';
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
  }
`

export const CoffeeAmount = styled.div``

export const AddToChart = styled.button``
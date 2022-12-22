import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const CartMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const UserLocation = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};

  label {
    color: ${props => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  width: 38px;
  height: 38px;

  border: none;
  border-radius: 6px;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']}
`
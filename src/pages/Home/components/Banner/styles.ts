import styled from 'styled-components'

export const BannerContainer = styled.div`
  height: 34rem;
  padding: 5.625rem 0;

  display: flex;
  justify-content: space-between;
`

export const BannerTitle = styled.div`
  width: 36.75rem;

  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${props => props.theme['base-title']};

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.15rem;
    line-height: 1.625rem;
  }
`

export const BannerSubtitle = styled.div`
  width: 35.4375rem;
  height: 5.25rem;
  margin-top: 5.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1.25rem;
`
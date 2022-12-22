import styled from 'styled-components'

export enum BgColorProps {
  YELLOW_DARK = 'yellow-dark',
  BASE_TEXT = 'base-text',
  YELLOW = 'yellow',
  PURPLE =  'purple'
}

export const SubtitleCardContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

export const SubtitleIcon = styled.div<{ bgColor: BgColorProps}>`
  width: 2rem;
  height: 2rem;

  padding: 0.5rem;
  border-radius: 100%;

  background-color: ${props => props.theme[props.bgColor]};
  color: ${props => props.theme['white']};

  display: flex;
  align-items: center;
`
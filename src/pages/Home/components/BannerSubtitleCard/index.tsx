import React, { ReactNode } from 'react'
import { BgColorProps, SubtitleCardContainer, SubtitleIcon } from './styles'

interface SubtitleCardProps {
  title: string,
  color: BgColorProps,
  children: ReactNode
}

export function BannerSubtitleCard({ title, color, children }: SubtitleCardProps) {
	return (
		<SubtitleCardContainer>
			<SubtitleIcon bgColor={color}>
				{children}
			</SubtitleIcon>
			<p>{title}</p>
		</SubtitleCardContainer>
	)
}
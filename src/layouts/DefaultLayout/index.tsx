import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { DefaultLaayoutContainer } from './styles'

export function DefaultLayout () {
	return (
		<DefaultLaayoutContainer>
			<Header />
			<Outlet />
		</DefaultLaayoutContainer>
	)
}
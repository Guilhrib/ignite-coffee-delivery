import React from 'react'
import { Banner } from './components/Banner'
import { CoffeeMenu } from './components/CoffeeMenu'
import { HomeContainer } from './styles'

export function Home() {
	return (
		<HomeContainer>
			<Banner />
			<h1>Nossos Cafés</h1>
			<CoffeeMenu />
		</HomeContainer>
	)
}
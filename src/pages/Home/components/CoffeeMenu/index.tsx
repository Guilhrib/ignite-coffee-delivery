import React from 'react'
import { menuData } from '../../../../data'
import { CoffeeMenuCard } from '../CoffeeMenuCard'
import { CoffeeMenuContainer } from './styles'

export function CoffeeMenu () {
	return (
		<CoffeeMenuContainer>
			{menuData.map(data => {
				return (
					<CoffeeMenuCard
						key={data.title}
						title={data.title}
						description={data.description}
						price={data.price}
						img={data.img}
						tags={data.tags}
					/>
				)
			})}
		</CoffeeMenuContainer>
	)
}
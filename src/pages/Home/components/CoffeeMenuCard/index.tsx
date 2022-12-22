import React from 'react'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
	AddToChart,
	CardContainer,
	CardControl,
	CardTags,
	CoffeeAmount,
	PriceLabel
} from './styles'

interface MenuCardProps {
	title: string,
	description: string,
	price: number,
	img: string,
	tags: string[]
}

export function CoffeeMenuCard({ title, description, price, img, tags }: MenuCardProps) {
	return (
		<CardContainer>
			<img src={img} alt="" width="50%"/>
			<CardTags>
				{tags.map(tag => {
					return (
						<div key={tag}>{tag}</div>
					)
				})}
			</CardTags>
			<h1>{title}</h1>
			<p>{description}</p>
			<CardControl>
				<PriceLabel>
					{price}
				</PriceLabel>
				<div>
					<CoffeeAmount>
						<button><Minus size={22} /></button>
						<span>1</span>
						<button><Plus size={22} /></button>
					</CoffeeAmount>
					<AddToChart>
						<ShoppingCart size={22} weight="fill" />
					</AddToChart>
				</div>
			</CardControl>
		</CardContainer>
	)
}
import React from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { CartButton, CartMenu, HeaderContainer, UserLocation } from './styles'
import logo from '../../assets/coffe-delivery-logo.svg'

export function Header () {
	return (
		<HeaderContainer>
			<img src={logo} alt="" />
			<CartMenu>
				<UserLocation>
					<MapPin size={22} weight="fill"/>
					<label>Porto Alegre, RS</label>
				</UserLocation>
				<CartButton>
					<ShoppingCart size={22} weight="fill" />
				</CartButton>
			</CartMenu>
		</HeaderContainer>
	)
}
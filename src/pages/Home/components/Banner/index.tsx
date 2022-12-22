import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import React from 'react'

import bannerImg from '../../../../assets/banner-coffe-img.svg'
import { BannerSubtitleCard } from '../BannerSubtitleCard'
import { BgColorProps } from '../BannerSubtitleCard/styles'
import { BannerContainer, BannerSubtitle, BannerTitle } from './styles'

export function Banner () {
	return(
		<BannerContainer>
			<div>
				<BannerTitle>
          Encontre o café preferido para qualquer hora do dia
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a<br/>
            qualquer hora</p>
				</BannerTitle>
				<BannerSubtitle>
					<BannerSubtitleCard title='Compra simples e segura' color={BgColorProps.YELLOW_DARK}>
						<ShoppingCart size={16} weight="fill" />
					</BannerSubtitleCard>
					<BannerSubtitleCard title='Compra simples e segura' color={BgColorProps.BASE_TEXT}>
						<Package size={16} weight="fill" />
					</BannerSubtitleCard>
					<BannerSubtitleCard title='Compra simples e segura' color={BgColorProps.YELLOW}>
						<Timer size={16} weight="fill" />
					</BannerSubtitleCard>
					<BannerSubtitleCard title='Compra simples e segura' color={BgColorProps.PURPLE}>
						<Coffee size={16} weight="fill" />
					</BannerSubtitleCard>
				</BannerSubtitle>
			</div>
			<img src={bannerImg} alt="" />
		</BannerContainer>
	)
}
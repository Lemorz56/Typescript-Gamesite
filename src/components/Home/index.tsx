import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc/WithErrorBoundary'

const Home = (): ReactElement => (
	<main>
		<GameList />
	</main>
)

export default withErrorBoundary(Home)

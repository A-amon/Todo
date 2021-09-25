import Container from '@components/Container'
import ThemeSwitch from '@components/ThemeSwitch'
import CreateInput from '@components/CreateInput'
import { todoContext } from '@context'
import { switchTheme, addTodo } from '@context/actions'

const Header = () => {
	const handleSubmit = (event, todo, dispatch, task) => {
		event.preventDefault()
		addTodo(todo, dispatch, task)
	}

	return (
		<todoContext.Consumer>
			{
				({ state, dispatch }) => (
					<header className="header">
						<Container>
							<div className="header__wrapper">
								<h1 className="header__title">
									Todo
								</h1>
								<ThemeSwitch onChange={() => switchTheme(state.theme, dispatch)} />
							</div>
							<CreateInput onSubmit={(event, task) => handleSubmit(event, state.todo, dispatch, task)} />
						</Container>
					</header>
				)
			}
		</todoContext.Consumer>
	)
}

export default Header
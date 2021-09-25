import Header from "@layouts/Header";
import Main from "@layouts/Main";
import { todoContext } from '@context'

function App () {
	return (
		<todoContext.Consumer>
			{
				({ state }) => (
					<div className={`app app--${state.theme}`}>
						<Header />
						<Main />
					</div>
				)
			}
		</todoContext.Consumer>
	)
}

export default App;

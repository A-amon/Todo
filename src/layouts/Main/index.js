import Container from '@components/Container'
import Tasks from "@containers/Tasks";

const Main = () => {
	return (
		<main className="main">
			<Container>
				<Tasks />
			</Container>
		</main>
	)
}

export default Main
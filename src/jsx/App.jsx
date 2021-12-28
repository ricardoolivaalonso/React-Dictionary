import { WordProvider } from "../context/store"
import { TestSection } from "./01-sections/TestSection"
import '../css/main.css'

const App = () => {

	return(
		<WordProvider>
			<TestSection />
		</WordProvider>
	)
}

export { App }

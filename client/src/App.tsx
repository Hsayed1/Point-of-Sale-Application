

import { User, greetUser } from "@monorepo/shared/frontend";
import Button from "@mui/material/Button";


function App() {
	const user: User = {
		firstName: "Client",
		lastName: "User",
		email: "clientuser@test.com",
		isAdmin: false,
	};

	const onGreetClicked = () => {
		greetUser(user);
	}

	return (
		<div className="App">
			<h1>Client App</h1>
			<Button onClick={onGreetClicked}>Greet Client!</Button>
		</div>
	);
}

export default App;
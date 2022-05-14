import Input from "./Input";
import { useDispatch } from "react-redux";
const Controls = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button type="button" onClick={() => dispatch({ type: "addOne" })}>
				Add One
			</button>
			<button type="button" onClick={() => dispatch({ type: "removeOne" })}>
				Remove One
			</button>

			<Input />
		</>
	);
};

export default Controls;

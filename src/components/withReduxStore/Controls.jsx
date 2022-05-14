import Input from "./Input";
import { useDispatch } from "react-redux";
import { addOne, removeOne } from "../../actions/moneyActions";
const Controls = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button type="button" onClick={() => dispatch(addOne())}>
				Add One
			</button>
			<button type="button" onClick={() => dispatch(removeOne())}>
				Remove One
			</button>

			<Input />
		</>
	);
};

export default Controls;

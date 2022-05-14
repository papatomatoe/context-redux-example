import Input from "./Input";
import { useMoney } from "../../context/money";
const Controls = () => {
	const { addOne, removeOne } = useMoney();
	return (
		<>
			<button type="button" onClick={addOne}>
				Add One
			</button>
			<button type="button" onClick={removeOne}>
				Remove One
			</button>

			<Input />
		</>
	);
};

export default Controls;

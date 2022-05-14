import { useMoney } from "../../context/money";
const Test = () => {
	const { money } = useMoney();

	return <p>Test {money}</p>;
};

export default Test;

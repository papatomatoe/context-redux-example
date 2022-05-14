import { useSelector } from "react-redux";
const Test = () => {
	const { money } = useSelector((state) => state.money);

	return <p>Test {money}</p>;
};

export default Test;

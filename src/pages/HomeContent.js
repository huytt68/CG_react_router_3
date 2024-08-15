import Carousel from "../components/Carousel";
import ListStudent from "./ListStudent";

const HomeContent = () => {
	return (
		<>
			<div className="h-100 w-100">
				<Carousel/>
				<h1 className="text-center">Home</h1>
			</div>
		</>
	)
}

export default HomeContent;
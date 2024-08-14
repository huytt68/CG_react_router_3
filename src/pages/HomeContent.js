import Carousel from "../components/Carousel";
import ListProduct from "../components/ListProduct";

const HomeContent = () => {
	return (
		<>
			<div className="h-100 w-100">
				<Carousel/>
				<ListProduct/>
			</div>
		</>
	)
}

export default HomeContent;
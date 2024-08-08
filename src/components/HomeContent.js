import Carousel from "./Carousel";
import ListProduct from "./ListProduct";

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
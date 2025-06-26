import Accordion from "./components/accordion"
import ImageSlider from "./components/image-slider"
import RancomColor from "./components/random_color"
import StarRating from "./components/star-rating"
function App() {
  return (
    <div>
      {/* Accordion */}
      <div className="mt-10">
      <Accordion />
      </div>
      {/* Random Color Generator */}
      <div className="mt-10">
      <RancomColor />
      </div>
      {/* Star Rating */}
      <div className="mt-10">
      <StarRating numberOfStars={5}/>
      </div>
      {/* ImageSlider */}
      <div className="mt-20">
        <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=5"} />
      </div>
    </div>
  )
}

export default App

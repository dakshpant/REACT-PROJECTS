import Accordion from "./components/accordion"
import RancomColor from "./components/random_color"
import StarRating from "./components/star-rating"
function App() {
  return (
    <div>
      {/* Accordion */}
      <div className="mt-10">
      <Accordion />
      </div>
      <div className="mt-10">
      <RancomColor />
      </div>
      <div className="mt-10">
      <StarRating />
      </div>
    </div>
  )
}

export default App

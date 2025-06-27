import Accordion from "./components/accordion"
import ImageSlider from "./components/image-slider"
import LoadMoreData from "./components/loadMore_data"
import RancomColor from "./components/random_color"
import SideBar from "./components/sideBar"
import menus from './components/sideBar/data'
import StarRating from "./components/star-rating"
function App() {
  return (
    <div>
      Accordion
      <div className="mt-10">
        <Accordion />
      </div>
      Random Color Generator
      <div className="mt-10">
        <RancomColor />
      </div>
      Star Rating
      <div className="mt-10">
        <StarRating numberOfStars={5} />
      </div>
      ImageSlider
      <div className="mt-20">
        <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=5"} />
      </div>
      Load More Data
      <div className="my-10">
        <LoadMoreData />
      </div>
{/*  */}
<div className="my-10">
<SideBar menus={menus}/>
</div>
    </div>
  )
}

export default App

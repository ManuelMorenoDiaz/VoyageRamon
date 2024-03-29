import "../../styles/components_styles/travel-board-post-styles.css";
import { BiSolidRightArrow } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function TravelBoardPost({ tituloPost }) {
  return (
    <div className="travel-board-post-body">
      <div className="travel-board-title">
        <h1>{tituloPost}</h1>
      </div>
      <div className="travel-board-icon">
        <h3>
          <BiSolidRightArrow />
        </h3>
      </div>
    </div>
  );
}

export default TravelBoardPost;

import Categories from "./Categories";
import Cities from "./Cities";
import Discover from "./Discover";
import Offers from "./Offers";
import "../../style.css";
import Loved from "./Loved";



function Feed() {
    return (
        <div className="feed">
            <Offers />
            <Categories />
            <Discover />
            <Cities />
            <Loved />
        </div>
    );
}

export default Feed;



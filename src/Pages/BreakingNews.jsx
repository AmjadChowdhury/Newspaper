import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12">Rahat dhakat</Link>
                <Link className="mr-12">Linkon chor</Link>
                <Link className="mr-12">Juthy Khuni</Link>
                <Link className="mr-12">Sabuj victim</Link>
                <Link className="mr-12">Amjad Boss</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
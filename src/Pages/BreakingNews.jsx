import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12">Rahat dhakat</Link>
                <Link className="mr-12">Linkon chor</Link>
                <Link className="mr-12">Juthy valo meye</Link>
                <Link className="mr-12">Sabuj valo chele</Link>
                <Link className="mr-12">Pavel haramjada</Link>
                <Link className="mr-12">Amjad low cg</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
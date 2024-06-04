import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";


const NewsDetails = () => {
    const {id} = useParams()
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-3">
                    <h1>NesDetails {id}</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;
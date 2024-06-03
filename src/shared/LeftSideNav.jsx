import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold ml-2 mb-5">All Categories</h1>
            <div className="space-y-3">
            {
                categories.map(category => <Link key={category.id} className="block ml-4 text-lg font-semibold hover:font-bold">{category.name}</Link>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;
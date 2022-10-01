import React from "react";
import {useSelector} from "react-redux";
import Resort from "../components/Resort/Resort";

const Bucket: React.FC = () => {
    const favResort = useSelector((state: any) => state.resort.resortsFav);
    if (favResort === undefined || favResort.length === 0) {
        return <p>No Fav Resort available</p>
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {favResort.map((data: any, index: number) => (
                    <div>
                        <Resort key={index} Resort={data}/>
                    </div>
                ))}
            </div>

        </>
    )

};

export default Bucket;
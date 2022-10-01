import * as React from 'react';
import Resort from './Resort';


interface AllResortsProp {
    Resorts: { id: number, title: string, description: string, price: string, imageUrl: string }[];
}

const AllResorts: React.FC<AllResortsProp> = props => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 ">
                {props.Resorts.map((data: any, index: number) => (
                    <div className='h-full' key={index}>
                        <Resort key={index} Resort={data}/>
                    </div>
                ))}
            </div>


        </>
    )
};

export default AllResorts;
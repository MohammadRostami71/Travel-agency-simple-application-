import React from "react";
import Header from "./Header";

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <Header/>
            <main className='container mx-auto'>
                {props.children}
            </main>

        </>
    )
};

export default Layout;
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
// import {useState, useEffect} from "react";
// import { useRouter } from 'next/router'

function Layout({ children }) {
    // const [isRouter, setIsRouter] = useState(false);
    // const router = useRouter();


    // useEffect(() => {
    //     if (router.pathname === '/register' || router.pathname === '/login') {
    //         setIsRouter(false);
    //     } else {
    //         setIsRouter(true);
    //     }
    // }, [router.pathname])

    return (
        <>
            <Header />
            <div className='container-md mt-4'>
                <div className='row g-2'>
                    {/* {isRouter ? ( */}
                        <div className='col-md-3 d-none d-md-block'>
                            <Sidebar />
                        </div>
                    {/* ) : ''
                    } */}
                    <div className='col-12 col-md-9'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout


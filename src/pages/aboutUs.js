import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutUs() {
    return (
        <>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">Next Web Guru Techno Services Pvt Ltd</h1>
                            <p className="lead text-muted mb-0 pt-4">NextWebGuru provides IT-related services and advice to businesses and organizations. The services include designing and implementing IT infrastructure to provide ongoing support and maintenance. Consulting can cover a wide range of topics, including strategy, operations, and technology.</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><Image src="/images/aboutus12.jpg" alt="image" className="img-fluid rounded-circle" height={280} width={280}/></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5 pb-4">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <p className="font-weight-light fs-4">
                            <b>Industry:</b>IT Services & Consulting</p>
                            <p className="font-weight-light fs-4"><b>Company size:</b>11-50 employees</p> 
                            <p className="font-weight-light fs-4"><b>Headquarters:</b> Sitarganj, Uttarakhand</p>
                            <p className="font-weight-light fs-4"><b>Founded:</b> 2017</p>
                        </div>
                        <div className="col-lg-5 px-2 mx-auto order-1 order-lg-2"><Image src="/images/aboutus13.jpg" alt="image" className="img-fluid mb-4 mb-lg-0 rounded-circle" width={280} height={280}/></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><Image src="/images/aboutus14.jpg" alt="image" className="img-fluid mb-4 mb-lg-0 rounded-circle" width={280} height={280}/></div>
                        <div className="col-lg-6">
                            <h2 className="font-weight-light">NWG E-Commerce</h2>
                            <p className="font-italic text-muted mb-4">NWG is focused on providing a efficient environment to shop online Goods and Electronic Gadgets</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-light pb-2">
                <div className="container text-center">
                    <p className="font-italic text-muted mb-0">&copy; Copyrights © 2017-2023 NextWebGuru.com All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default AboutUs

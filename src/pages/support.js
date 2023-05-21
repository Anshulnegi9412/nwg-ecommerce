import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Support() {
    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="row align-items-center py-12">
                        <div className="col-lg-5">
                            <h1 className="display-4">Contact Us at:</h1>
                            <p className="lead mb-0 pt-4"><b>Tel:</b> 8954545789</p>
                            <p className="lead mb-0 pt-4"><b>Mail:</b> info@nextwebguru.com</p>
                            <p className="lead mb-0 pt-4"><b>Website:</b><Link href={'http://nextwebguru.com/'} className='text-decoration-none'> http://nextwebguru.com/</Link></p>
                            <p className="lead mb-0 pt-4"><b>Address:</b> Shiv Mandir Ward Indra Market, Shaktifarm, Sitarganj, Uttarakhand 263151</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support

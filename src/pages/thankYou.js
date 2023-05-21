import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs';

function ThankYou() {
    const router = useRouter();
    return (
        <div className='container py-5 bg-light'>
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <div className="mb-4 text-center" style={{color:'#00cc44'}}>
                    <BsCheckCircle size={80} />
                </div>
                <div className="text-center">
                    <h1 style={{color:'#00004d'}}>Thank You for Shopping with US</h1>
                    <Link href='/' className="btn btn-primary mt-4">Continue Shopping</Link>
                </div>
                </div>
                        
            </div>
        </div>
    );
}
        

export default ThankYou


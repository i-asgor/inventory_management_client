import React from 'react';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <footer className='bg-dark'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-6 text-start">
                        <p className='text-white'> <small> &copy; {date} copyright Electronics Inventory Management</small></p>
                    </div>
                    <div className="col-sm-12 col-md-6 text-end">
                        <p className='text-white'>
                            <a href="https://web.facebook.com" className='text-white text-decoration-none'>Facebook</a>
                            <a href="https://www.linkedin.com" className='text-white text-decoration-none mx-2'>Linkdin</a>
                            <a href="https://www.youtube.com" className='text-white text-decoration-none'>YouTube</a>
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
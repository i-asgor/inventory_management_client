import React from 'react';
import './Software.css';

const Software = () => {
    return (
        <div className="container">
            <div className="justify-content-center row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-lift--hover shadow border-0 card">
                                <div className="py-5 card-body">
                                    <div className='w-25 text-info'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="h3 text-info text-uppercase">Access Anywhere</h4>
                                    <p className="description mt-3">Your key data in sync, in detail, across systems and on any device.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-lift--hover shadow border-0 card">
                                <div className="py-5 card-body">
                                    <div className='w-25 text-success'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd" />
                                        <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                                        </svg>
                                    </div>
                                    <h4 className="h3 text-success text-uppercase">Barcode Scanning</h4>
                                    <p className="description mt-3">Record the work real-time as its being done, barcode scanned, for speed & accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-lift--hover shadow border-0 card">
                                <div className="py-5 card-body">
                                    <div className="w-25 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="h3 text-warning text-uppercase">Serial Tracking</h4>
                                    <p className="description mt-3">Flexible tracking rules to match your data needs and inventory workflows with barcode scanning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
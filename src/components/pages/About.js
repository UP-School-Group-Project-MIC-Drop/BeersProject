import React from 'react'

function About() {
    return (
        <div className='container'>
            <div className="border border-4 border-warning mt-5 bg-dark">
                <div className="display-4 text-white text-center">Hello Visitor! </div>
                <div className="text-white text-center fs-4">
                    
                <p>This web page is one of our UP School project that we completed as a group.</p>
                    <p>We want to tell you what we do and what you can do on this web page.</p>
                        

                    <p>You can see the all beers we have listed using Pagination on the first opening page.
                        You can do filter on beers by using a slider according to alcohol by volume, pH, and SRM values.
                        If you want to filter alcohol by volume you should firstly choose greater than or lower than button by value.
                        After that can pick a value using the slider.</p>
                    <p>
                        If you want to filter pH or SRM values,
                        firstly you should pick the checkbox. You can figure what you want range by pH.
                        You can choose a value for SRM. You can see the values above from the slider.
                    </p>

                    <p>You can search all beers and also you can filter those beers.
                        If you want to learn more about beers you should visit the detail page.
                        You can reach the detail page by clicking on the beer of your pick. </p>
                        <p>Check out the API and documentation we used for this assignment below.</p>

                    <p>Thank you for coming!</p>
                    <p>Please use the contact page to reach us.</p>
                    <div className="fs-6">

                        <p><a className='text-warning' href="https://api.punkapi.com/v2/beers">Click</a> to see API {' '}-{' '}
                            <a className='text-warning' href="https://punkapi.com/documentation/v2">Click</a> to see API Documentation{' '}-{' '}
                            <a className='text-warning' href="https://github.com/UP-School-Group-Project-MIC-Drop/BeersProject">Click</a> to see source code
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About

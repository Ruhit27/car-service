import React from 'react';

const About = () => {
  return (
    <div className='mt-10'>
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2020</time>
                <div className="text-lg font-black">Our Founding</div>
                Established in 2020, our company embarked on a mission to provide top-notch car service solutions. Starting with a humble fleet of just five vehicles, we dedicated ourselves to quality service, ensuring every client's needs were met with professionalism and precision.
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">Fleet Expansion</div>
                By 2021, our fleet had grown significantly, including a range of vehicles from economy to luxury, meeting the diverse needs of our clients. Our commitment to maintaining a modern, reliable fleet set us apart as a leader in car service excellence.
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2023</time>
                <div className="text-lg font-black">Introduction of Digital Booking</div>
                In 2023, we revolutionized our booking system with the introduction of digital reservations, enhancing customer convenience and streamlining our operations. This digital transformation marked a significant milestone in our journey towards technological innovation.
            </div>
            <hr />
        </li>
        </ul>
        </div>

  );
};

export default About;
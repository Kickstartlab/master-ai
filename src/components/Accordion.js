import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border border-gray-50 bg-gray-200 rounded-md py-4 px-5">
            <div className="accordion-title flex justify-between items-center" onClick={() => setIsActive(!isActive)}>
                <div className='font-poppins font-semibold text-xl'>
                    {title}
                </div>

                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content font-inter text-white-100 mt-4">{content}</div>}
        </div>
    );
};

export default Accordion

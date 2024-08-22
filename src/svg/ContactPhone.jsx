import React from 'react';

const ContactPhone = ({ width = "45", height = "45", fillColor = "#ffffff", strokeColor = "#000000" }) => {
    return (
        <div className='contact__contact-div'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={width} 
                height={height} 
                viewBox="0,0,256,256"
                style={{ fill: strokeColor }}
            >
                <g 
                    fill={fillColor} 
                    fillRule="nonzero" 
                    stroke="none" 
                    strokeWidth="1" 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter" 
                    strokeMiterlimit="10" 
                    strokeDasharray="" 
                    strokeDashoffset="0" 
                    fontFamily="none" 
                    fontWeight="none" 
                    fontSize="none" 
                    textAnchor="none" 
                    style={{ mixBlendMode: "normal" }}
                >
                    <g transform="scale(8,8)">
                        <path d="M11,2c-1.64497,0 -3,1.35503 -3,3v22c0,1.64497 1.35503,3 3,3h10c1.64497,0 3,-1.35503 3,-3v-22c0,-1.64497 -1.35503,-3 -3,-3zM11,4h1c0,1.105 0.895,2 2,2h4c1.105,0 2,-0.895 2,-2h1c0.56503,0 1,0.43497 1,1v22c0,0.56503 -0.43497,1 -1,1h-10c-0.56503,0 -1,-0.43497 -1,-1v-22c0,-0.56503 0.43497,-1 1,-1zM16,25c-0.551,0 -1,0.449 -1,1c0,0.551 0.449,1 1,1c0.551,0 1,-0.449 1,-1c0,-0.551 -0.449,-1 -1,-1z"></path>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default ContactPhone;

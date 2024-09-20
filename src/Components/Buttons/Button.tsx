import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    href,
}) => {
    const baseClasses = `
        flex items-center text-[1.2rem] justify-center px-6 md:px-8 py-4 rounded-full 
        transition-all duration-300 focus:outline-none
        bg-gradient-to-br from-[#323232] to-[#141414]
        shadow-[-21px_16px_10px_0px_rgba(0,0,0,0.04),-12px_9px_9px_0px_rgba(0,0,0,0.13),-5px_4px_6px_0px_rgba(0,0,0,0.23),-1px_1px_4px_0px_rgba(0,0,0,0.26)]
        hover:shadow-[-25px_20px_12px_0px_rgba(0,0,0,0.06),-15px_12px_11px_0px_rgba(0,0,0,0.15),-7px_6px_8px_0px_rgba(0,0,0,0.25),-2px_2px_5px_0px_rgba(0,0,0,0.28)]
        hover:translate-y-[-2px]
        active:translate-y-[1px]
        active:shadow-[-18px_14px_8px_0px_rgba(0,0,0,0.03),-10px_8px_7px_0px_rgba(0,0,0,0.11),-4px_3px_5px_0px_rgba(0,0,0,0.21),-1px_1px_3px_0px_rgba(0,0,0,0.24)]
    `;

    const variants = {
        primary: `
            ${baseClasses}
            bg-[#1A1A1A]
            text-[#F2F2F2]
            hover:bg-opacity-90
            hover:from-[#3a3a3a] hover:to-[#1c1c1c]
        `,
        secondary: `
            ${baseClasses}
            bg-[#FFCC00]
            text-[#1A1A1A]
            hover:bg-opacity-90
            hover:from-[#ffda47] hover:to-[#ffc700]
        `,
    };

    if (href) {
        return (
            <Link href={href} passHref className={`${variants[variant]} ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
import React, { ButtonHTMLAttributes } from 'react';


import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    name: string;
}

const Button: React.FC<ButtonProps> = ({label, name, ...rest}) => {
    return (
        <div>
            <button className={name} {...rest}>
                {label}
            </button>
        </div>
    );
}

export default Button;
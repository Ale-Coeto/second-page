"use client"

interface ButtonProps {
    label: string,
    onClick?: () => void;
    color: string
}

const Button = ({ label, onClick, color }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`p-2 rounded-md ${color}`}>
            {label}
        </button>
    )
}

export default Button;
interface ButtonProps {
	className: string;
	btnText: string;
}

export default function Button({ className, btnText }: ButtonProps) {
	return <button className={`py-3 px-6 font-bold rounded-sm ${className}`}>{btnText}</button>;
}

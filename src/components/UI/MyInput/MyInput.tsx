import React from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
	value: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeHolder?: string;
}

const MyInput = ({ value, setValue, placeHolder = "" }: MyInputProps) => {
	return (
		<input
			type='text'
			value={value}
			onChange={setValue}
			className={styles.input}
			placeholder={placeHolder}
		/>
	);
};

export default MyInput;

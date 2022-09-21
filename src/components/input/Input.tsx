import React from "react";
import { StyledInput, StyledLabel, StyledMessage, StyledText } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ id, disabled, label, message, error, success, onChange, placeholder, ...props }) => {
	return (
		<>
			<StyledLabel>
				<StyledText disabled={disabled} error={error}>
					{label}
				</StyledText>
			</StyledLabel>
			<StyledInput
				id={id}
				type="text"
				onChange={onChange}
				disabled={disabled}
				error={error}
				success={success}
				placeholder={placeholder}
				{...props}
			></StyledInput>
			<StyledMessage>
				<StyledText error={error}>{message}</StyledText>
			</StyledMessage>
		</>
	);
};

export default Input;

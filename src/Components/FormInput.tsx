import React from "react";
import { Div, Input } from "react-native-magnus";
import { Controller } from "react-hook-form";

interface IFormInputProps {
	//control - special react-hook-form prop
	control: any;
	name: string;
	placeholder: string;
}

const FormInput: React.FC<IFormInputProps> = ({
	control,
	name,
	placeholder,
}) => {
	//the controller component functions in a similar way to a flatlist, with options and a render option for elements
	return (
		<Div w={120}>
			<Controller
				control={control}
				name={name}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error },
				}) => (
					<Input
						placeholder={placeholder}
						onChangeText={onChange}
						borderColor={error ? "red" : "gray"}
					/>
				)}
			/>
		</Div>
	);
};

export default FormInput;

import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CiWarning } from "react-icons/ci";

type GInputProps = {
	label?: string;
	placeholder?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	ariaLabel?: string;
	multiline?: boolean;
	rows?: number;
};

const GInput = ({ label, type = "text", ariaLabel, name, placeholder, sx, multiline = false, rows }: GInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					aria-label={ariaLabel ?? placeholder}
					inputProps={{ autoComplete: name }}
					sx={{
						...sx,
						width: "100%",
						borderRadius: "5px",
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "secondary.main"
						},
						"& .mui-dzi2n9-MuiFormLabel-root-MuiInputLabel-root , .MuiFormLabel-root": {
							color: "white"
						},
						"& .MuiInputBase-input": {
							color: "white"
						}
					}}
					label={label}
					placeholder={placeholder}
					minRows={rows || 6}
					variant='outlined'
					multiline={multiline}
					type={type}
					value={field.value ?? ""}
					size='small'
					fullWidth
					error={!!error?.message}
					helperText={
						error?.message && (
							<span className='flex items-center gap-1 relative right-3'>
								<CiWarning size={16} /> {error?.message}
							</span>
						)
					}
				/>
			)}
		/>
	);
};

export default GInput;

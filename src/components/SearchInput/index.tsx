import { HTMLInputTypeAttribute, useEffect, useState } from "react";

import "./styles.css";

interface Option {
	text: string;
	value: string | number;
}

interface Props {
	options: Option[];
	onOptionSelected: Function;
	onChange: Function;
	placeholder: string;
}

export function SearchInput({
	options,
	onOptionSelected,
	onChange,
	...props
}: Props) {
	const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

	function handleChange(e) {
		onChange && onChange(e);

		if (!e.target.value) {
			return setFilteredOptions([]);
		}

		const results = options.filter((option) =>
			option.text
				.toLocaleLowerCase()
				.includes(e.target.value.toLocaleLowerCase())
		);

		setFilteredOptions(results);
	}

	function handleOptionClick(option: Option) {
		onOptionSelected && onOptionSelected(option);
	}

	return (
		<div>
			<input
				className="search-input"
				type="search"
				onChange={handleChange}
				{...props}
			/>

			<div className="options">
				{filteredOptions.map((option) => (
					<div
						key={option.value}
						className="option"
						onClick={() => handleOptionClick(option)}
					>
						{option.text}
					</div>
				))}
			</div>
		</div>
	);
}

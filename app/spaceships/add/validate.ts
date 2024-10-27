export function validateString(input: string | null, min: number, max: number) {
	return (
		input != null &&
		String(input).length > 0 &&
		input.length >= min &&
		input.length <= max
	);
}

export function validateNumber(input: string | null, min: number, max: number) {
	if (input == null) return false;
	const parsed = parseInt(input);
	return !isNaN(parsed) && parsed >= min && parsed <= max;
}

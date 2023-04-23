/**
* Converts a string to a number with a unit.
*/
export function convertToUnit(str: string | number, unit = 'px'): string {
	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
}

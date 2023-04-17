import { useMemo } from "react";
import { IBrandCheck } from "./../types";

const getPaginatedList = <T>(list: T[], max: number, currentPage: number) => {
	let result: T[] = [];
	for (
		let i = 0 + (currentPage - 1) * max;
		i < list.length && i < max * currentPage;
		i++
	) {
		result.push(list[i]);
	}
	return result;
};

const getPages = (length: number, max: number) => {
	let result: number[] = [];
	for (let i = 1; i <= Math.ceil(length / max); i++) {
		result.push(i);
	}
	return result;
};

const checkBrandCheck = (checks: IBrandCheck[]) => {
	let result: boolean = false;
	for (let brand of checks) {
		if (brand.checked) {
			result = true;
			break;
		}
	}
	return result;
};

const usePagination = <T>(
	list: T[],
	max: number,
	currentPage: number,
	query: string,
	brandChecks: IBrandCheck[]
): [T[], number[]] => {
	if (checkBrandCheck(brandChecks) || query) currentPage = 1;
	const paginate = useMemo(() => {
		if (list.length === 0) return list;
		return getPaginatedList(list, max, currentPage);
	}, [list, max, currentPage]);
	const pages = useMemo(() => {
		return getPages(list.length, max);
	}, [list, max]);
	return [paginate, pages];
};

export default usePagination;

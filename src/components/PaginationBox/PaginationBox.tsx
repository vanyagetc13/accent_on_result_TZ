import React from "react";

import styles from "./PaginationBox.module.scss";
interface PaginationBoxProps {
	pages: number[];
	setCurPage: (page: number) => void;
}

const PaginationBox = ({ pages, setCurPage }: PaginationBoxProps) => {
	return (
		<div className={styles.pagination}>
			{pages.map((page) => (
				<button
					key={`${page} + ${Number(new Date())}`}
					onClick={() => setCurPage(page)}
					className={styles.page}
				>
					{page}
				</button>
			))}
		</div>
	);
};

export default PaginationBox;

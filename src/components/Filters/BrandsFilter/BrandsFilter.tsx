import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import styles from "./BrandsFilter.module.scss";
import { IBrand, IBrandCheck } from "./../../../types";

interface BrandsFilterProps {
	brandList: IBrand[];
	brandChecks: IBrandCheck[];
	checkBoxChange: (code: string) => void;
}

const BrandsFilter = ({
	brandList,
	brandChecks,
	checkBoxChange,
}: BrandsFilterProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		isExpanded: showMenu,
	});
	return (
		<div>
			<h4>Бренды</h4>
			<div {...getCollapseProps()}>
				{brandList.map((brand) => {
					const brandCheck = brandChecks.find(
						(brandCheck) => brandCheck.code === brand.code
					);
					return (
						<div key={brand.code} className={styles.brand}>
							<input
								type='checkbox'
								checked={brandCheck?.checked || false}
								onChange={() => checkBoxChange(brand.code)}
							/>
							<div>{brand.title}</div>
						</div>
					);
				})}
			</div>
			<div
				className={styles.openclose}
				{...getToggleProps({
					onClick: () => {
						setShowMenu((prev) => !prev);
					},
				})}
			>
				<img
					src={`./images/arrows/${isExpanded ? "up" : "down"}.png`}
					alt='arrow up/down'
					width={35}
				/>
			</div>
		</div>
	);
};

export default BrandsFilter;

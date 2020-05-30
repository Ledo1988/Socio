import React from "react";
import s from "./Personal.module.scss"

const Personal = () => {
	return (
		<section className={s.personal}>
			<div className={s.name}>Elena Dolbnia</div>
				<div className={s.details}>
					<ul className={s.detailsList}>
						<li className={s.detailsItem}>
							Date of Birth: 27 October
						</li>
						<li className={s.detailsItem}>
							City: Moscow
						</li>
						<li className={s.detailsItem}>
							Education: ENGECON
						</li>
						<li className={s.detailsItem}>
							Web Site: ledo1988.io
						</li>
					</ul>
				</div>
		</section>
	)
}

export default Personal;

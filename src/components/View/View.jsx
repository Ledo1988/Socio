import React from "react";
import s from "./View.module.scss"
import ViewMenu from "./ViewMenu/ViewMenu";

const View = () => {
	return (
		<div className={s.viewWrapper}>
			<ViewMenu/>

			<div className="profile__info">
				<div className="profile__name">Elena Dolbnia</div>
				<div className="profile__details">
					<ul className="profile__details-list">
						<li className="profile__details-item">
							Date of Birth: 27 October
						</li>
						<li className="profile__details-item">
							City: Moscow
						</li>
						<li className="profile__details-item">
							Education: ENGECON
						</li>
						<li className="profile__details-item">
							Web Site: ledo1988.io
						</li>
					</ul>

				</div>
			</div>

		</div>
	)
}

export default View;

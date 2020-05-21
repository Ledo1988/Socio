import React from "react";

const Profile = () => {
	return (
		<main className="main">
			<section className="main__img">
				<img src={require("../img/img_profile-bg.jpg")} alt="Profile" height="250"/>
			</section>
			<section className="main__profile profile">
				<div className="profile__img">
					<img src="https://img.mavl.io/1557067193209_cat_baby_profile_animal_shelter.jpg" width="70" height="70" alt="Profile"/>
				</div>
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

			</section>
			<section className="main__posts posts"></section>
		</main>
	)
}

export default Profile;

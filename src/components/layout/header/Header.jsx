import React from 'react';
import styles from './Header.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { FiArrowLeft } from 'react-icons/fi';
import Hamburger from '../hamburger/Hamburger';

const Header = ({ backLink }) => {
	/*TODO: React router useHistory */

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>
			{/*User profile */}
			<Hamburger />
		</header>
	);
};

export default Header;

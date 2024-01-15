import React from 'react';
import styles from './Header.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';
import { IoArrowBack } from 'react-icons/io5';

const Header = ({ backLink }) => {
	/*TODO: React router useHistory */

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoArrowBack />
			</button>
			{/*User profile */}
			<Hamburger />
		</header>
	);
};

export default Header;

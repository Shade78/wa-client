import React from 'react';
import { useState } from 'react';
import styles from './Hamburger.module.scss';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import Menu from './Menu';

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRightAlt color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	);
};

export default Hamburger;

import React from 'react';
import { useState } from 'react';
import styles from './Hamburger.module.scss';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import Menu from './Menu';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <CgMenuRightAlt color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	);
};

export default Hamburger;

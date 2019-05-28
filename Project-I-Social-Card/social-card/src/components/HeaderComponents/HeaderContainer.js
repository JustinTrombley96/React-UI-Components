import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
	return (
		<div className='header-container'>
			<div className='img-title'>
				<div className='img'>
					<ImageThumbnail />
				</div>
				<div className='title'>
					<HeaderTitle />
				</div>
			</div>
			<div className='content'>

			<HeaderContent />
			</div>
		</div>
	);
};

export default HeaderContainer;

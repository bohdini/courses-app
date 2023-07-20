import React, { useState } from 'react';

import './SearchBar.scss';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = (props) => {
	const [search, setSearch] = useState('');

	const onChange = (event) => {
		if (event.target.value === '') {
			props.onSubmit('');
		}
		setSearch(event.target.value);
	};

	const onSearch = (searchValue) => {
		props.onSubmit(searchValue);
	};

	return (
		<div className='search-bar'>
			<Input
				placeholderText={'Enter course name...'}
				onChange={onChange}
				htmlFor={'search-input'}
				id={'search-input'}
				className='search-input'
			/>
			<Button onClick={() => onSearch(search)}>Search</Button>
		</div>
	);
};

export default SearchBar;

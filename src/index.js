import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './tree';
import './styles.css';


const data = [
	{id: 1, name: 'one' },
	{id: 2, name: 'two' },
	{id: 3, name: 'three' },
	{id: 4, name: 'four' },
	{id: 5, name: 'five' },
	{id: 6, name: 'six' },
	{id: 7, name: 'seven' },
	{id: 8, name: 'eight' },
	{id: 9, name: 'nine' },
	{id: 11, name: 'one-one', parentId: 1 },
	{id: 12, name: 'one-two', parentId: 1 },
	{id: 13, name: 'one-three', parentId: 1 },
	{id: 51, name: 'five-one', parentId: 5 },
	{id: 52, name: 'five-two', parentId: 5 },
	{id: 53, name: 'five-three', parentId: 5 },

	{id: 121, name: 'one-two-one', parentId: 12 },
	{id: 122, name: 'one-two-two', parentId: 12 },
	{id: 123, name: 'one-two-three', parentId: 12 },
];

ReactDOM.render(<Tree data={data} />, document.getElementById('app'));

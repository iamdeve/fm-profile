import React from 'react';
import classes from './app.module.css';
import TopMenu from './components/TopMenu/TopMenu';
import Profile from './components/Profile/Profile';
function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<TopMenu />
			</header>
			<div className={classes.MainContent}>
				<Profile />
			</div>
		</div>
	);
}

export default App;

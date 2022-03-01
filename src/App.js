const Pet = (props) => {
	// stands for properties
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('h2', {}, props.animal),
		React.createElement('h2', {}, props.breed)
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Adopt Me!'),
		React.createElement(Pet, {
			name: 'Crys',
			animal: 'Dog',
			breed: 'Terrier'
		}),
		React.createElement(Pet, {
			name: 'Luna',
			animal: 'Dog',
			breed: 'Havanese'
		}),
		React.createElement(Pet, {
			name: 'Blah',
			animal: 'Bird',
			breed: 'Parrot'
		})
	]);
};

// call createElement multiple times but only call render one time
ReactDOM.render(React.createElement(App), document.getElementById('root'));

// render will be called createRoot in v18

// react - one way data flow via props (from parent to child), data doesn't flow up
// - if i have a bug in my parent i know the child didn't cause it and i can rule out the child

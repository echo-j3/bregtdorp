const downloadFiles = async (query, variables, fetch) => {
	let numberOfImages = 0;
	let imageNumber = 0;
	let statusResponse = 200;
	let completePath = query + imageNumber + '.jpg';

	// Image number
	do {
		const res = await fetch(`${completePath}`);
		if (res.status === 200) {
			imageNumber++;
			completePath = query + imageNumber + '.jpg';
		} else {
			statusResponse = res.status;
			return imageNumber;
		}
	} while (statusResponse === 200);
};

export default downloadFiles;

const convertToDownloadLink = (driveUrl: string): string => {
	const fileIdPattern = /\/d\/([a-zA-Z0-9_-]+)/;
	const fileIdMatch = fileIdPattern.exec(driveUrl);
	if (!fileIdMatch) {
		throw new Error('Invalid Google Drive URL');
	}
	const fileId = fileIdMatch[1];
	return `https://drive.google.com/uc?export=download&id=${fileId}`;
};
export default convertToDownloadLink;

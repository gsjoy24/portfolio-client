function convertToDownloadLink(driveUrl: string): string {
	const fileIdMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
	if (!fileIdMatch) {
		throw new Error('Invalid Google Drive URL');
	}
	const fileId = fileIdMatch[1];
	return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export default convertToDownloadLink;

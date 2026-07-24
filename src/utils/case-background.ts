import { join } from 'node:path';
import sharp from 'sharp';

export const detectCaseBackground = async (imageUrl: string): Promise<'#fff' | '#000'> => {
	const imagePath = join(process.cwd(), 'public', imageUrl.replace(/^\//, ''));
	const { data, info } = await sharp(imagePath)
		.flatten({ background: '#fff' })
		.resize(32, 32, { fit: 'fill' })
		.removeAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	let luminance = 0;
	let samples = 0;
	for (let y = 0; y < info.height; y += 1) {
		for (let x = 0; x < info.width; x += 1) {
			if (x > 1 && x < info.width - 2 && y > 1 && y < info.height - 2) continue;
			const offset = (y * info.width + x) * info.channels;
			luminance += data[offset] * 0.2126 + data[offset + 1] * 0.7152 + data[offset + 2] * 0.0722;
			samples += 1;
		}
	}

	return luminance / samples >= 128 ? '#fff' : '#000';
};

const wallpaper = require('wallpaper')
const extractFrames = require('gif-extract-frames')

const FRAME_RATE = 15
const imagePath = './image.gif'
const framesPath = './frames/frame-%d.png'
const extract = async (input, output) => await extractFrames({ input, output })

const setFrameAsWallpaper = async (i, frames, path) => {
	const currentFrame = path.replace('%d', i)
	await wallpaper.set(currentFrame)
	i = i >= frames - 1 ? 0 : i + 1
	setTimeout(() => { setFrameAsWallpaper(i, frames, path) }, 1000 / FRAME_RATE)
}

extract(imagePath, framesPath)
	.then(({ shape }) => setFrameAsWallpaper(0, shape[0], framesPath))
	.catch(err => console.log(err))

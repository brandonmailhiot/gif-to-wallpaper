const wallpaper = require('wallpaper')
const extractFrames = require('gif-extract-frames')

const FRAME_RATE = 15
const input = './image.gif'
const output = './frames/frame-%d.png'
const extract = async () => await extractFrames({ input, output })

const setFrameAsWallpaper = async (i, frames) => {
	const currentFrame = output.replace('%d', i)
	await wallpaper.set(currentFrame)
	i = i >= frames - 1 ? 0 : i + 1
	setTimeout(() => { setFrameAsWallpaper(i, frames) }, 1000 / FRAME_RATE)
}

extract().then(({ shape }) => setFrameAsWallpaper(0, shape[0]))

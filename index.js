const wallpaper = require('wallpaper')
const extractFrames = require('gif-extract-frames')

const FRAME_RATE = 15
const input = './image.gif'
const output = './frames/frame-%d.png'

const setFrameAsWallpaper = async (i, frames) => {
	const currentFrame = output.replace('%d', i)
	await wallpaper.set(currentFrame)
	i = i >= frames - 1 ? 0 : i + 1
	setTimeout(() => { setFrameAsWallpaper(i, frames) }, 1000 / FRAME_RATE)
}

(async () => {
	const { shape } = await extractFrames({ input, output })
	setFrameAsWallpaper(0, shape[0])
})()


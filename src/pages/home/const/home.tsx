import { Banner } from '@features/home'
import device from '@images/device.png'
import kids from '@images/kids.png'
import mobile from '@images/mobile.png'
import screenshot1 from '@images/screenshot1.png'
import screenshot2 from '@images/screenshot2.png'
import screenshot3 from '@images/screenshot3.png'
import tv from '@images/tv.png'

export const sections = [
	{
		component: <Banner />,
		headline: {
			title: 'Enjoy on your TV',
			description: `Watch on Smart TVs,PlayStation, Xbox,\n Chromecast, Apple TV, Blu-ray players, and more.`,
		},
		screensPreview: {
			frame: tv,
			screenshot: screenshot1,
		},
	},
	{
		headline: {
			title: 'Watch everywhere',
			description: `Stream unlimited movies and TV shows on your\n phone, tablet, laptop, and TV.`,
		},
		screensPreview: {
			frame: device,
			screenshot: screenshot2,
		},
	},
	{
		headline: {
			title: 'Enjoy on your TV',
			description: `Send kids on adventures with their favorite\n characters in a space made just for them—free\n with your membership.`,
		},
		screensPreview: {
			frame: kids,
		},
	},
	{
		headline: {
			title: `Download your shows\n to watch offline`,
			description: `Watch on a plane, train, or submarine...`,
		},
		screensPreview: {
			frame: mobile,
			screenshot: screenshot3,
		},
	},
]

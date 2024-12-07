import { Banner } from '@features/home'
import device from '@images/device.png'
import kids from '@images/kids.png'
import mobile from '@images/mobile.png'
import tv from '@images/tv.png'

export const sections = [
	{
		component: <Banner />,
		headline: {
			title: 'Enjoy on your TV',
			description: `Watch on Smart TVs,PlayStation, Xbox,\n Chromecast, Apple TV, Blu-ray players, and more.`,
		},
		image: tv,
	},
	{
		headline: {
			title: 'Watch everywhere',
			description: `Stream unlimited movies and TV shows on your\n phone, tablet, laptop, and TV.`,
		},
		image: device,
	},
	{
		headline: {
			title: 'Enjoy on your TV',
			description: `Send kids on adventures with their favorite\n characters in a space made just for them—free\n with your membership.`,
		},
		image: kids,
	},
	{
		headline: {
			title: `Download your shows\n to watch offline`,
			description: `Watch on a plane, train, or submarine...`,
		},
		image: mobile,
	},
]

export const faq = [
	{
		question: 'What is Netflix?',
		answer:
			'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
	},
	{
		question: 'How much does Netflix cost?',
		answer:
			'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR17.99 a month. No extra costs, no contracts.',
	},
	{
		question: 'Where can I watch?',
		answer:
			'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
	},
	{
		question: 'How do I cancel?',
		answer:
			'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
	},
	{
		question: 'What can I watch on Netflix?',
		answer:
			'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
	},
	{
		question: 'Is Netflix good for kids?',
		answer:
			'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
	},
]

export const link = [
	{
		title: 'Frequently Asked Questions',
		url: 'https://help.netflix.com/ko/node/412',
	},
	{
		title: 'customer service center',
		url: 'https://help.netflix.com/ko',
	},
	{
		title: 'account',
		url: 'https://www.netflix.com/kr/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount',
	},
	{
		title: 'Media Center',
		url: 'https://media.netflix.com/ko/',
	},
	{
		title: 'Investment Information (IR)',
		url: 'http://ir.netflix.com/',
	},
	{
		title: 'Job Information',
		url: 'https://jobs.netflix.com/',
	},
	{
		title: 'Netflix Supported Devices',
		url: 'https://www.netflix.com/watch',
	},
	{
		title: 'Terms of Use',
		url: 'https://help.netflix.com/legal/termsofuse',
	},
	{
		title: 'privacy policy',
		url: 'https://help.netflix.com/legal/privacy',
	},
	{
		title: 'Cookie Settings',
		url: 'https://www.netflix.com/kr/#',
	},
	{
		title: 'Company Information',
		url: 'https://help.netflix.com/legal/corpinfo',
	},
	{
		title: 'Contact Us',
		url: 'https://help.netflix.com/contactus',
	},
	{
		title: 'Speed Test',
		url: 'https://fast.com/',
	},
	{
		title: 'Legal Notice',
		url: 'https://help.netflix.com/legal/notices',
	},
	{
		title: 'Only on Netflix',
		url: 'https://www.netflix.com/kr/browse/genre/839338',
	},
]

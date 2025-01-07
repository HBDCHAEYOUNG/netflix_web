const memberships = [
	{
		type: 'advertising',
		price: '5,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'Fewer ads than you might think',
	},
	{
		type: 'standard',
		price: '13,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'No Advertisement',
	},
	{
		type: 'premium',
		price: '17,000 won',
		picture: 'The best',
		resolution: '4K(UHD) + HDR',
		sound: 'include',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '4',
		storageDevice: '6',
		advertisement: 'No Advertisement',
	},
]
const fields = [
	{ label: 'Monthly fee', key: 'price' },
	{ label: 'Picture and sound quality', key: 'picture' },
	{ label: 'Resolution', key: 'resolution' },
	{ label: 'Spatial Sound (Immersive Sound)', key: 'sound' },
	{ label: 'Supported devices', key: 'supportedDevices' },
	{ label: `Number of concurrent users\namong household members`, key: 'concurrentUsers' },
	{ label: 'Storage device', key: 'storageDevice' },
	{ label: 'Advertisement', key: 'advertisement' },
]

export { memberships, fields }

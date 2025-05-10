const membershipTypes = [
	{ value: '3', label: 'Advertising Standard', quality: '1080p', gradient: 'gradient2' },
	{ value: '2', label: 'Standard', quality: '1080p', gradient: 'gradient3' },
	{ value: '1', label: 'Premium', quality: '4K + HDR', gradient: 'gradient4' },
]

const infoText = `Learn more about our advertising memberships . If you choose an advertising membership, you will be asked to provide your date of birth to serve you personalized ads and for other purposes consistent with Netflix's Privacy Policy .

Availability of Full HD (1080p), UHD (4K), and HDR picture quality may vary depending on the Internet service and device performance used. Not all content is available in all picture quality levels. For more information, see Terms of Use .

Only people who live together can use the account together. Standard membership allows 1 additional member, Premium allows up to 2 additional members. Learn more . Premium membership allows 4 simultaneous connections, Standard or Advertising Standard allows 2 simultaneous connections.

Live events are available to all Netflix members and include ads.`

const memberships = [
	{
		type: '3',
		price: '5,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'Fewer ads than you might think',
	},
	{
		type: '2',
		price: '13,500 won',
		picture: 'well',
		resolution: '1080p(Full HD)',
		supportedDevices: 'TV, computer, smartphone, tablet',
		concurrentUsers: '2',
		storageDevice: '2',
		advertisement: 'No Advertisement',
	},
	{
		type: '1',
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

export { memberships, fields, membershipTypes, infoText }

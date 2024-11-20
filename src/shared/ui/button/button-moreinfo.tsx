import Logo from '@icons/icons/play.svg'
function ButtonMoreInfo() {
	return (
		<div className="rounded-common h-[42px] w-[161px] gap-3 bg-Primary/White/20 p-[12px_24px_12px_24px] flex-center hover:bg-white/15">
			<img src={Logo} alt="play" />
			More Info
		</div>
	)
}
export default ButtonMoreInfo

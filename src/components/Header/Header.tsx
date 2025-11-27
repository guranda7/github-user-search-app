

export default function Header() {

  return (
    <div className="flex flex-row justify-between">
      <span className="text-2xl font-bold">devfinder</span>
      <div className="flex flex-row gap-4 items-center">
        <span className="text-xl font-[space_mono] text-[#697C9A]">DARK</span>
        <img className="w-5 h-5" src="/assets/icon-moon.svg" alt="" />
      </div>
    </div>
  )
}

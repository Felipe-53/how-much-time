
function Layout({ children }) {
  const [title, time, subtitle] = children

  return (
    <div className="
      min-h-screen
      grid
      grid-rows-6 grid-cols-4
      text-gray-100
      text-center
    ">
      <div className="
        row-start-2 row-end-3
        col-span-full
        justify-self-center
        self-end lg:pb-6
        max-w-sm lg:max-w-md
      ">
        {title}
      </div>

      <div className="
        row-start-3 row-end-5
        col-start-2 col-end-4
        max-w-sm lg:max-w-md
        self-center justify-self-center
      ">
        {time}
      </div>

      <div className="
        row-start-5 row-end-6
        col-span-full
        justify-self-center
        self-start lg:pt-6
        max-w-sm lg:max-w-md
      ">
        {subtitle}
      </div>
    </div>
  )
}

export default Layout

import React from 'react'

interface IPageTitle{
  children: React.ReactNode
}

function PageTitle({ children }: IPageTitle) {
  return (
    <h1 className="my-6 text-2xl font-semibold text-black dark:text-white">{children}</h1>
  )
}

export default PageTitle

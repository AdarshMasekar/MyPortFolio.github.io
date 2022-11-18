import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    backToTop: boolean
}

const BackToTop = ({backToTop}: Props) => {
  return (
    <div >         
    <ChevronDoubleUpIcon
    className="fixed bg-transparent text-[#009589]/50 hover:text-[#009589] animate-spin w-10 h-10
    bottom-[1%] right-[5%] z-100"
    />
    <h5 className="hidden hover:visible">back to top</h5>
    </div>
  )
}

export default BackToTop
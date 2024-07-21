import SearchList from '@/components/SearchList';
import React from 'react'

const Page = ({params}:{params:any}) => {
    const {search} = params;
    





  return (
    <div className='mt-32'>
        <SearchList input={search} />
       
      
    </div>
  )
}

export default Page

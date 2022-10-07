import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export const Home = () => {

const { isLoading, isError, data} = useSearchUsersQuery("elis-1")

console.log(data);

  return (
    <div>Home</div>
  )
}

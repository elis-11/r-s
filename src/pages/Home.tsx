import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export const Home = () => {

const { isLoading, isError, data} = useSearchUsersQuery("elis-11")

  return (
    <div>Home</div>
  )
}

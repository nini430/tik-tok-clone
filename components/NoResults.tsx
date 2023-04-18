import { NextPage } from 'next';
import React from 'react'

interface INoResultsProp {
  text:string;
}

const NoResults:NextPage<INoResultsProp> = ({text}) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults
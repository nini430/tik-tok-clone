import {footerList1,footerList2,footerList3} from '../utils/constants'


const List=({items,mt}:{items:string[],mt?:boolean})=>{
  return (
    <div className={`flex-wrap hidden lg:flex gap-2 ${mt?'mt-5':''}`}>
        {items.map(item=>(
          <p className='text-gray-400 text-sm hover:underline cursor-pointer' key={item}>{item}</p>
        ))}
    </div>
  )
}

export const Footer = () => {
  return (
    <div>
      <List items={footerList1}/>
      <List items={footerList2} mt/>
      <List items={footerList3} mt/>
      <p className='text-gray-400'>2022 NG TikTik &copy;</p>
    </div>
  )
}

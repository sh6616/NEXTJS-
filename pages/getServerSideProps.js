import React from "react"
import Link from "next/link"
export default (props) => {
  console.log(props)
  return (
    <div>
      {
        props.data.map((item, index) => {
          return (
            <div key={index}>
              <span>{item.author.loginname}:</span><span>{item.title}</span>
              <br></br>
              <Link href='/case/[id]' as={`/case/${item.author.loginname}`} key={item.title}>
                <a>作者详情:{item.author.avatar_url}</a>  
              </Link>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
            </div>
          )
        })
      }
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://cnodejs.org/api/v1/topics')
  const json = await res.json()

  return {
    props: json, // will be passed to the page component as props
  }
}


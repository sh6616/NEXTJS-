export default (props) => {
  console.log(props)
  return (
    <div>
      {
        props.data.recent_replies.map((item, index) => {
          return (
            <div key={index}>
              <p>作者:{item.author.loginname}</p>
              <p>登陆时间:{item.author.avatar_url}</p>
              <p>最后评论时间:{item.last_reply_at}</p>
              <p>标题:{item.title}</p>
              <br></br>
            </div>
          )
        })
      }
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://cnodejs.org/api/v1/topics')
  const json = await res.json()
  let paths = json.data.map((item) => {
    return (
      {
        params: { list: `${item.author.loginname}` }
      }
    )
  })
  return (
    {
      paths,
      fallback: false
    }
  )
}

export const getStaticProps = async ({ params: { list } }) => {
  const res = await fetch(`https://cnodejs.org/api/v1/user/${list}`)
  const json = await res.json()

  return (
    {
      props: json
    }
  )
}
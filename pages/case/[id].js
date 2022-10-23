export default (props) => {
  console.log(props)
  return (
    <div>
      {
        props.json.data.recent_replies.map((item, index) => {
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

export const getServerSideProps = async ({ query: { id } }) => {

  const res = await fetch(`https://cnodejs.org/api/v1/user/${id}`)
  const json = await res.json()

  return {
    props: { json }
  }
}
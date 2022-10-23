import Link from "next/link"
function HomePage() {
  return (
    <div>
      <Link href='/getServerSideProps'>getServerSideProps</Link>
      <br></br>
      {/* <Link href='/case/[list]/name=1'>[list]</Link> */}
    </div>
  )
}

export default HomePage
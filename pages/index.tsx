import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/counter">
        <a>Counter</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

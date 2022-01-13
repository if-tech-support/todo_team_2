import Head from 'next/head'
import { NewTodo } from './NewTodo'

export default function Home() {
  return (
    <div>
      <Head></Head>
      <NewTodo />
    </div>
  )
}

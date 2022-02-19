import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

function Markdown(props) {
  const { detail, setDetail } = props

  return (
    <div>
      <MDEditor value={detail} onChange={setDetail} />
    </div>
  )
}

export default Markdown

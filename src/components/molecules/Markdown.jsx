import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { Text } from '@chakra-ui/layout'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

function Markdown(props) {
  const { detail, setDetail } = props
  return (
    <>
      <Text fontSize="xl" fontWeight="700" pb={1.2} pt={4}>
        DETAIL
      </Text>
      <MDEditor value={detail} onChange={setDetail} />
    </>
  )
}

export default Markdown

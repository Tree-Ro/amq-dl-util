import SearchForm from '../components/SearchForm'
import PageWrapper from '../components/PageWrapper'
import TableDisplay from '../components/TableDisplay'
import useAnisong from '../hooks/useAnisong'
import useApi from '../hooks/useApi'

const Hub = () => {
  const { url, options, updateBody } = useAnisong()
  const { searchResult, loading, error } = useApi(url, options)

  return (
    <PageWrapper>
      <TableDisplay rows={searchResult} loading={loading} error={error} />
      <SearchForm updateBody={updateBody} loading={loading} />
    </PageWrapper >
  )
}

export default Hub
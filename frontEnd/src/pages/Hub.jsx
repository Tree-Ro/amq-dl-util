import SearchForm from '../components/SearchForm'
import PageWrapper from '../components/PageWrapper'
import TableDisplay from '../components/TableDisplay'

import { ValuesProvider, ResultsProvider } from '../context/FormProvider'



const Hub = () => {

  return (
    <PageWrapper>
      <ResultsProvider>
        <TableDisplay />
      </ResultsProvider>
      <ValuesProvider>
        <SearchForm />
      </ValuesProvider>
    </PageWrapper >
  )
}

export default Hub
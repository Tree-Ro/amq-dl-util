import SearchForm from '../components/SearchForm'
import PageWrapper from '../components/PageWrapper'

import FormProvider from '../context/FormProvider'



const Hub = () => {

  return (
    <PageWrapper>
      <h2>Search results go here [WIP]</h2>
      <FormProvider>
        <SearchForm />
      </FormProvider>
    </PageWrapper>
  )
}

export default Hub
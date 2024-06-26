import { useQuery } from '@tanstack/react-query'
import { errorsType } from 'modules/results/constatns/api'

import { comparisonErrorsQueryKey } from './types'

export const useComparisonErrorTypes = () => {
  const { data, isPending, error } = useQuery({
    queryKey: [comparisonErrorsQueryKey],
    // queryFn: comparisonErrorsApi.getErrorTypes,
    queryFn: () => Promise.resolve(errorsType),
  })

  return {
    errorTypes: data,
    errorTypesAreLoading: isPending,
    errorTypesRequestError: error,
  }
}

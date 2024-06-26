import { Dispatch, FC, SetStateAction } from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Box, Modal, Typography } from '@mui/material'
import { useInitForm } from 'config/rhf'

import classes from './ResultErrorsModal.module.scss'
import { ResultErrorsModalButtons } from './ResultErrorsModalButtons'
import { ResultErrorsModalFields } from './ResultErrorsModalFields'
import { ResultErrorsModalImages } from './ResultErrorsModalImages'

interface ResultErrorsModalProps {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  error: any
}

export const ResultErrorsModal: FC<ResultErrorsModalProps> = ({ openModal, setOpenModal, error }) => {
  const methods = useInitForm<any>({})

  const { handleSubmit } = methods
  const onSubmit: SubmitHandler<any> = (obj) => {
    console.log(obj)
  }
  const onError = () => toast.error('Что то пошло не так, попробуйте еще раз.')
  return (
    <Modal onClose={() => setOpenModal(false)} open={openModal}>
      <Box className={classes.modal}>
        <Typography variant="h5">№{error.number}</Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <ResultErrorsModalImages error={error} />
            <ResultErrorsModalFields error={error} />
            <ResultErrorsModalButtons />
          </form>
        </FormProvider>
      </Box>
    </Modal>
  )
}

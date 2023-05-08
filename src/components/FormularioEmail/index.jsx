import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Field, Form, Formik } from 'formik'

const initialValues = {
  email: '',
  title: '',
  conteudo: '',
}

export function FormularioEmail({ enviaEmail }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (
          values.email.includes('@') &&
          values.email.includes('.') &&
          values.title.length > 0 &&
          values.conteudo.length > 0
        ) {
          enviaEmail(values, resetForm, setSubmitting)
        } else {
          setSubmitting(false)
          window.alert('Verifique os campos e tente novamento.')
        }
      }}
    >
      {({
        submitForm,
        setFieldValue,
        getFieldProps,
        errors,
        isSubmitting,
        isValid,
      }) => (
        <Form
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  textAlign: 'center',
                }}
                variant="h6"
                color={'black'}
              >
                Ficou com alguma dúvida? Não se preocupe. Preencha o formulário
                a seguir que iremos te ajudar!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                error={errors.email}
                fullWidth
                component={TextField}
                name="email"
                onChange={(e) => setFieldValue('email', e.target.value)}
                value={getFieldProps('email').value}
                variant="outlined"
                margin="dense"
                label="Email"
              />
              {errors.email && (
                <Typography color={'#f30707'}>{errors.email}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Field
                error={errors.title}
                fullWidth
                onChange={(e) => setFieldValue('title', e.target.value)}
                value={getFieldProps('title').value}
                component={TextField}
                name="title"
                variant="outlined"
                margin="dense"
                label="Título"
              />
              {errors.title && (
                <Typography color={'#f30707'}>{errors.title}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Field
                error={errors.conteudo}
                fullWidth
                onChange={(e) => setFieldValue('conteudo', e.target.value)}
                value={getFieldProps('conteudo').value}
                component={TextField}
                multiline
                maxRows={5}
                minRows={4}
                name="conteudo"
                variant="outlined"
                margin="dense"
                label="Duvida"
              />
              {errors.conteudo && (
                <Typography color={'#f30707'}>{errors.conteudo}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ backgroundColor: 'black' }}
                onClick={submitForm}
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                endIcon={
                  isSubmitting ? (
                    <CircularProgress size={16} style={{ color: 'white' }} />
                  ) : null
                }
              >
                Mandar pergunta
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

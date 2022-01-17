import { useState } from 'react'
import { FormControl, Grid } from '@mui/material'
import { useSnackbar } from 'notistack'
import logo from '../../assets/images/logo.svg'
import Button from '../../microcomponents/Button'
import Input from '../../microcomponents/Input'
import styles from './style'

function Login({ classes }) {
  const { enqueueSnackbar } = useSnackbar()

  let loginForm = {
    email: '',
    password: '',
  }
  const [login, setLogin] = useState(loginForm)
  const [hasError, sethasError] = useState(false)

  const handleChangeInput = (name) => (event) => {
    const value = event.target.value
    setLogin({ ...login, [name]: value })
  }

  const onFinish = async () => {
    const url = 'https://reqres.in/api/login'
    const model = JSON.stringify(login)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: model,
    })
    const response = await res.json()

    if (res.status === 200) {
      enqueueSnackbar('علمیات با موفقیت انجام شد', { variant: 'success' })
    } else {
      enqueueSnackbar(response?.error, { variant: 'error' })
      sethasError(true)
    }
  }
  return (
    <div className={classes.root}>
      <Grid item xs={8} md={3}>
        <div className={classes.cardBox}>
          <FormControl fullWidth>
            <div className={classes.img__logo}>
              <img src={logo} alt="" />
            </div>
            <div className={classes.title__page}>
              <h1>ورود به سامانه</h1>
            </div>

            <div className={classes.form__item}>
              <Input
                onChange={handleChangeInput('email')}
                value={login.email}
                label="نام کاربری"
                variant="outlined"
                fullWidth
                error={hasError}
              />
            </div>

            <div className={classes.form__item}>
              <Input
                label="رمز عبور"
                type="password"
                variant="outlined"
                fullWidth
                error={hasError}
                onChange={handleChangeInput('password')}
                value={login.password}
              />
            </div>

            <div className={classes.submit__form}>
              <Button fullWidth variant="outlined" onClick={onFinish}>
                ورود
              </Button>
            </div>
          </FormControl>
        </div>
      </Grid>
    </div>
  )
}

export default styles(Login)

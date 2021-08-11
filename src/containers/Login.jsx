import React, { useState } from 'react'
// import { loginGoogle, loginWhitEmailPassword, registerWhitEmailPassword } from '../redux/loginDucks'
// import {useDispatch} from 'react-redux'
import { ContainerForm, FormLogin, FormRegister, Input, Button, IconSocial, HeaderForm, Select, ErrorP } from './login-styled/LoginStyled'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginEmail, createUser, updateProfile } from '../services/login'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { uploadFile } from '../services'


const departamentos = ['Amazonas', 'Antioquía', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia','Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
]

const Login = () => {

    const history = useHistory();

    const [isRegister, setIsRegister] = useState(false)
    const [alert, setAlert] = useState(false)
    // const dispatch = useDispatch()

    const formikRegister = useFormik({
        initialValues: {
            first_name: '',
            department: '',
            city: '',
            emailR: '',
            passwordR: '',
            passwordR2: ''
        },
        validationSchema: yup.object({
            first_name: yup.string().min(5, 'Tu nombre es muy corto').required('Nombre'),
            department: yup.string().required('Departamento'),
            city: yup.string().required('Ciudad'),
            emailR: yup.string().email('Tu email no es valido').required('Correo'),
            passwordR: yup.string().min(6, 'Debe tener mas de 6 caracteres').required('Contraseña'),
            passwordR2: yup.string()
               .oneOf([yup.ref('passwordR'), null], 'La contraseña no coincide')
        }),
        onSubmit: async (data) => {
            //console.log(data)
            const dataUser = {
                first_name: data.first_name,
                last_name: ' ',
                email: data.emailR,
                password: data.passwordR,
                role: 3,
                status: "active",
                city: data.city,
                department: data.department,
                title: 'Vendedor'
            }
            try {
                const response = await createUser(dataUser);
                if (response.status === 200) {
                    setAlert(false)
                    const user = {
                        email: data.emailR,
                        password: data.passwordR,
                    }
                    const login = await loginEmail(user)
                    if (login.status === 200) {
                        const token = login.data.data.token
                        sessionStorage.setItem('token', JSON.stringify(token))
                        history.go(0);
                    }
                }
                
            } catch (error) {
                console.log(error)
                setTimeout(() => {
                    setAlert(false)
                }, 3000);
                setAlert(true)
            }
        }
    })

    const formikSign = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Tú email no es valido').required('Correo'),
            password: yup.string().required('Contraseña')
        }),
        onSubmit: async (data) => {
            //console.log(data)
            try {
                const response = await loginEmail(data)
                if (response.status === 200) {
                    setAlert(false)

                    const token = response.data.data.token
                    sessionStorage.setItem('token', JSON.stringify(token))
                    history.go(0);
                }
            } catch (error) {
                setTimeout(() => {
                    setAlert(false)
                }, 3000);
                setAlert(true)
            }
            
        }
        
    })

    const responseGoogle = async (response) => {
        if (response.error) {
            console.log(response.error)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
            setAlert(true)
        }else {
            console.log(response.Ts)
            const dataLogin = {
                email: response.Ts.Et,
                password: response.Ts.mS
            }
            //Try login 
            try {
                const response = await loginEmail(dataLogin)
                if (response.status === 200) {
                    setAlert(false)

                    const token = response.data.data.token
                    sessionStorage.setItem('token', JSON.stringify(token))
                    history.go(0);
                }
            } catch (error) {
                //Try Register
                console.log('entro al registro')
                const image = response.Ts.hj
                const dataUser = {
                    first_name: response.Ts.Ne,
                    last_name: ' ',
                    email: response.Ts.Et,
                    password: response.Ts.mS,
                    role: 3,
                    status: "active",
                    title: 'Vendedor'
                }
                const responseLogin = await createUser(dataUser);
                if (responseLogin.status === 200) {
                    console.log('registro el user')
                    setAlert(false)
                    const user = {
                        email: dataUser.email,
                        password: dataUser.password
                    }
                    //Login User
                    const login = await loginEmail(user)
                    if (login.status === 200) {
                        const token = JSON.stringify(login.data.data.token)
                        sessionStorage.setItem('token', token)
                        history.go(0);
                    }
                }
            }
        }
    }

    // const handleGoogleLoginClick = () => {
    //     window.location.href=`${process.env.REACT_APP_URL_API}auth/sso/google?mode=jwt`;
    // }

    return (
        <>
        <ContainerForm>
            {
            isRegister? 
            <>
            <HeaderForm>Registrar</HeaderForm>
            <FormRegister onSubmit={formikRegister.handleSubmit}>
                <label>
                    {
                        formikRegister.errors.first_name ? formikRegister.errors.first_name : 'Nombre'
                    }
                </label>
                <Input
                type="text" 
                name='first_name'
                placeholder="Escribe tu nombre" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.first_name}
                />
                <label>
                    {
                        formikRegister.errors.city ? formikRegister.errors.city : 'Ciudad de Residencia'
                    }
                </label>
                <Input
                type="text" 
                name='city'
                placeholder="Escriba la Ciudad de Residencia" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.city}
                />
                <label>
                    {
                        formikRegister.errors.department ? formikRegister.errors.department : 'Departamento'
                    }
                </label>
                    <Select 
                    name="department"
                    onChange={formikRegister.handleChange}
                    // defaultValue={'DEFAULT'}
                    value={formikRegister.values.department || 'DEFAULT'}
                    >
                        <option 
                        value={'DEFAULT'} 
                        disabled 
                        >Elija una opcion</option>
                        {
                            departamentos.map(ele => (
                                <option value={ele} key={ele}>{ele}</option>
                            ))
                        }
                    </Select>
                <label>
                    {
                        formikRegister.errors.emailR ? formikRegister.errors.emailR : 'Correo'
                    }
                </label>
                <Input
                type="text" 
                name='emailR'
                placeholder="Escribe tu correo" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.emailR}
                />
                <label>
                    {
                        formikRegister.errors.passwordR ? formikRegister.errors.passwordR : 'Contraseña'
                    }
                </label>
                <Input
                type="password" 
                placeholder="Contraseña"
                name='passwordR'
                onChange={formikRegister.handleChange}
                value={formikRegister.values.passwordR}
                />
                <label>
                    {
                        formikRegister.errors.passwordR2 ? formikRegister.errors.passwordR2 : 'Contraseña'
                    }
                </label>
                <Input
                type="password" 
                placeholder="Repite la contraseña"
                name='passwordR2'
                onChange={formikRegister.handleChange}
                value={formikRegister.values.passwordR2}
                />
                <ErrorP>
                {
                    Object.keys(formikRegister.errors).length === 0 ? '' : '*Todos los campos son obligatorios*' 
                }
                {
                    alert && 'Hubo un error al crear el Usuario'
                }
                </ErrorP>
                <Button  type="submit" >
                Registrarse
                </Button>
            </FormRegister>
            <p onClick={() => {setIsRegister(false)}}>Inicia sesion</p>
            </>
            :
            <>
            <HeaderForm>Iniciar Sesion</HeaderForm> 
                <FormLogin onSubmit={formikSign.handleSubmit}>
                <label>
                    {
                        formikSign.errors.email ? formikSign.errors.email : 'Correo'
                    }
                </label>
                <Input 
                type="text" 
                name='email'
                placeholder="Escribe tu correo" 
                onChange={formikSign.handleChange}
                value={formikSign.values.email}
                />
    
                <label>
                    {
                        formikSign.errors.password ? formikSign.errors.password : 'Contraseña'
                    }
                </label>
                <Input
                type="password" 
                placeholder="Contraseña"
                name='password' 
                onChange={formikSign.handleChange}
                value={formikSign.values.password}
                />
                <ErrorP>
                {
                    Object.keys(formikSign.errors).length === 0 ? '' : '*Todos los campos son obligatorios*' 
                }
                {
                    alert && 'Usuario o contraseña Incorrectos'
                }
                </ErrorP>
                <Button type="submit">
                Enviar
                </Button>

            </FormLogin>
            <p onClick={() => {setIsRegister(true)}}> 
                ¿No tienes cuenta?
            </p>
            </>
            }
            <div >
                <GoogleLogin
                    clientId="551239456496-6vf6v1vjscaaf2lsaniebr5hpdtvuq1a.apps.googleusercontent.com"
                    render={renderProps => (
                        <IconSocial src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" onClick={renderProps.onClick} disabled={renderProps.disabled} />
                      )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <IconSocial src='https://image.flaticon.com/icons/png/512/733/733547.png' alt='facebook' />
            </div>
        </ContainerForm>
        </>
    )
}

export default Login
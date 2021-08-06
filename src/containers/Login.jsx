import React from 'react'
// import { loginGoogle, loginWhitEmailPassword, registerWhitEmailPassword } from '../redux/loginDucks'
// import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { ContainerForm, FormLogin, FormRegister, Input, Button, IconSocial, HeaderForm, Select, ErrorP } from './login-styled/LoginStyled'
import { useFormik } from 'formik'
import * as yup from 'yup'
const departamentos = ['Amazonas', 'Antioquía', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia','Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
]

const Login = () => {
    const [isRegister, setIsRegister] = useState(false)
    // const dispatch = useDispatch()

    const formikRegister = useFormik({
        initialValues: {
            nameR: '',
            department: '',
            emailR: '',
            passwordR: '',
            passwordR2: ''
        },
        validationSchema: yup.object({
            nameR: yup.string().min(5, 'Tu nombre es muy corto').required('Nombre'),
            department: yup.string().required('Departamento'),
            emailR: yup.string().email('Tu email no es valido').required('Correo'),
            passwordR: yup.string().min(6, 'Debe tener mas de 6 caracteres').required('Contraseña'),
            passwordR2: yup.string()
               .oneOf([yup.ref('passwordR'), null], 'La contraseña no coincide')
        }),
        onSubmit: (data) => {
            // dispatch(registerWhitEmailPassword(data.emailR, data.passwordR, data.nameR))
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
        onSubmit: (data) => {
            // dispatch(loginWhitEmailPassword(data.email, data.password))
        }
        
    })
    const handleGoogleLoginClick = () => {
        // dispatch(loginGoogle())
    }
    console.log(formikRegister)
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
                        formikRegister.errors.nameR ? formikRegister.errors.nameR : 'Nombre'
                    }
                </label>
                <Input
                type="text" 
                name='nameR'
                placeholder="Escribe tu nombre" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.nameR}
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
                <IconSocial src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" onClick={handleGoogleLoginClick}/>
                <IconSocial src='https://image.flaticon.com/icons/png/512/733/733547.png' alt='facebook' />
            </div>
        </ContainerForm>
        </>
    )
}

export default Login
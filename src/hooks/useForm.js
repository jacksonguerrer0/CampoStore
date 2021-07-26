import { useState } from "react"

const useForm = (initialState = {}) => {

    const [dataForm, setDataForm] = useState(initialState)

    const handleChangeInput = ({target}) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value
        })
    }

    const handleChangeForm = (form) => {
        setDataForm({
            ...dataForm,
            ...form
        })
    }

    const reset = () => {
        setDataForm(initialState)
    }

    return [dataForm, handleChangeInput, handleChangeForm, reset]
}

export default useForm

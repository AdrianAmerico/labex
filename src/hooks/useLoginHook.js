import { useState } from "react";

function useLoginHook(initialValue) {

    const [formData, setFormData] = useState(initialValue);

    const handleForm = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const cleanField = () => {
        setFormData(initialValue)
    }
    return [formData, handleForm, cleanField]
}
export default useLoginHook;


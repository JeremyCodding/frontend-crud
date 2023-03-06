import { FormData } from "./modules/AddMemberDialog"

export const validateForm = (form: FormData) => {
    let errorList = {
        name: "",
        nameLength: "",
        email: "",
        access_level: "",
      };

      const errorMessages = {
        name: "O campo nome é obrigatório.",
        nameLength: "O nome deve ter pelo menos 3 letras",
        email: "O campo email é obrigatório.",
        access_level: "Defina um valor para o nível de acesso do membro.",
      };
    
    if(form.name === "") {
        errorList.name = errorMessages.name
    } else if (form.name.length < 3) {
        errorList.name = errorMessages.nameLength
    }

    if(form.email === "") {
        errorList.email = errorMessages.email
    }

    if(form.access_level === null) {
        errorList.access_level = errorMessages.access_level
    }

    return errorList
}
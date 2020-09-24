module.exports = {
  age: function age(timestemp) {
    const today = new Date()
    const birthDate = new Date(timestemp)

    //validação do ano
    let age = today.getFullYear() - birthDate.getFullYear() //pegando o ano todo
    const month = today.getMonth() - birthDate.getMonth() //pegando o mês
    //validando mês e dia
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }
    return age
  },

  date: function (timestemp) {
    const date = new Date(timestemp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)


    return `${day}-${month}-${year}`
  },

  split: function split(disciplina) {
    disciplinas = disciplina.split(",")
    return disciplinas
  },

  graduation: function (graduation) {
    let educationLevel 

    switch (graduation) {
      case "medio":
        educationLevel = "medio"

        break;

      case "superior":
        educationLevel = "superior"
        break;

      case "mestrado":
        educationLevel = "mestrado"
        break;

      case "doutorado":
        educationLevel = "doutorado"
        break;

      default:
        break;


    };

   
  }

}
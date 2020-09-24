const fs = require('fs');
const data = require('./data.json')
const {age, date ,split, graduation } = require('./utils')

//create
exports.post = function (req, res) {
    //validação
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    //tratar os dados
    let { url_avatar, name, birth, schooling, schoolType, disciplina } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    // const id = Number(data.teachers.len + 1);
    const id = Number(data.teachers.length + 1)
    data.teachers.push({
         id,
        url_avatar,
        name,
        birth,
        schooling,
        schoolType,
        disciplina,
        created_at
    })


    //inserir os dados

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("write file error");

        return res.redirect("/teachers")
    });

}

//show
exports.show = function(req,res){
    const { id } = req.params

    const foundTeachers = data.teachers.find(function (teacher){
        return teacher.id == id
    })

    if (!foundTeachers) return res.send("Teacher not found")
    
    const teacher = {
        ...foundTeachers,
        age: age(foundTeachers.birth),
        disciplina: split(foundTeachers.disciplina),
        created_at:date(foundTeachers.created_at),
        schooling: graduation(foundTeachers.schooling)

    }
    
    return res.render("teachers/show", { teacher })
    
}

exports.edit = function( req,res ){

    const {id} = req.params

    const foundTeachers = data.teachers.find(function (teacher){
        return teacher.id == id
    })
    if(!foundTeachers) return res.send("Teacher not found")

    const teacher = {
        ...foundTeachers,
        age: age(foundTeachers.birth),
        disciplina: split(foundTeachers.disciplina),
        created_at:date(foundTeachers.created_at),
        schooling: graduation(foundTeachers.schooling)

    }

    return res.render("teachers/edit", { teacher })
}
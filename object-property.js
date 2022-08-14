const students = [
    {id: 21, name: 'Omer Sunny'},
    {id: 3, name: 'Mannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]

const ids = students.find( s => s.id > 40);
console.log(ids);
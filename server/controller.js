let persons = [
  // {
  //   name: 'joe',
  //   index: 0
  // },
  // {
  //   name: 'JoeDirt',
  //   index: 1
  // },
  // {
  //   name: 'JoeMama',
  //   index: 2
  // },
  // {
  //   name: 'GiJoe',
  //   index: 3
  // }
];
let id = 0;

module.exports = {
  getName: (req, res) => {
    console.log(persons);
    res.status(200).send(persons);
  },
  addName: (req, res) => {
    console.log('ADD NAME HIT', req.body);
    // const index = persons[persons.length - 1].id +  1;
    const { name, input } = req.body;

    const newPerson = {
      name: req.body.input,
      index: id
    };
    // console.log(44, newPerson);
    persons.push(newPerson);
    id++;
    res.status(200).send(persons);
  }
  //   deleteName: () => {}
};

let names = ['joe', 'JoeDirt', 'JoeMama', 'GiJoe'];
let id = 0;

module.exports = {
  getName: (req, res) => {
    console.log(names);
    res.status(200).send(names);
  }
  //   ,
  //   addName: (req, res) => {
  //     console.log(req.body);
  //   }
  //   deleteName: () => {}
};

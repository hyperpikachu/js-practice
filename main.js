function user(first, last) {
  this.firstName = first
  this.lastName = last
}

const heropy = new user('Heropy', 'Park')
const amy = new user('Heropy', 'Park')
const neo = new user('neo', 'smith')


console.log(heropy)
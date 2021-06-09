const user = {
    fName: 'ivan',
    lName: 'Ivanov',
    age: 30,
    getFullName: () => {
        console.log(123);
        return`${this.fName} ${this.lName}`
       
    }
}

document.querySelector('h1 span').textContent = user.name

console.log(123);
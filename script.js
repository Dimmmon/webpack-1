const user = {
    fName: 'ivan',
    lName: 'Ivanov',
    age: 30,
    getFullName: () => {
        return`${this.fName} ${this.lName}`
    }
}

document.querySelector('h1 span').textContent = user.name
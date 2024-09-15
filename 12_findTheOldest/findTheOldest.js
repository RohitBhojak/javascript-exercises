const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldYear = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currYear = getAge(person.yearOfBirth, person.yearOfDeath);
        return (oldYear > currYear)? oldest: person;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

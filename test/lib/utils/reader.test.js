const Reader = require('../../../lib/utils/Reader')

describe("Pruebas de la clase Reader", () => {
    test('1) Create a mission commander objet', () => {
        const explorers =Reader.readJsonFile('./data/explorers.json')
        console.log(explorers.length)
        expect(explorers.length).toBe(15)
    })
    })
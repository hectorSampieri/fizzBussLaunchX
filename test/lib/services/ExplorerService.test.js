const ExplorerService = require('../../../lib/services/ExplorerService')
const Reader = require('../../../lib/utils/Reader')

describe("Pruebas de la clase ExplorerService", () => {
    test('1) Comprobar metodo filterByMission', () => {
        const explorers =Reader.readJsonFile('./data/explorers.json')
        const explorersByMission =ExplorerService.filterByMission(explorers, 'node')
        console.log(explorersByMission.length)
        expect(explorersByMission.length).toBe(10)
    })
    })
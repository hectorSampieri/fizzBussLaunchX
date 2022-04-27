const FizzbuzzService = require('../../../lib/services/FizzbuzzService')

describe("Pruebas de la clase FizzbuzzService", () => {
    test('1) Comprobar  Score 1', () => {
        const explorer1= {name: "Explorer1", score: 1}
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerTest.trick).toBe(1)
    })
    test('2) Comprobar  Score 3', () => {
        const explorer1= {name: "Explorer1", score: 3}
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerTest.trick).toBe("FIZZ")
    })
    test('3) Comprobar  Score 5', () => {
        const explorer1= {name: "Explorer1", score: 5}
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerTest.trick).toBe("BUZZ")
    })
    test('4) Comprobar  Score 15', () => {
        const explorer1= {name: "Explorer1", score: 15}
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerTest.trick).toBe("FIZZBUZZ")
    })
    })
const ExplorerService= require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')
const Reader = require('../utils/Reader')
const File ="./data/explorers.json"

class ExplorerController {

        static getExplorersByMission(mission){
            const explorers =Reader.readJsonFile(File);
            return ExplorerService.filterByMission(explorers,mission);

        }

        static getExplorersUsernamesByMission(mission){
            const explorers =Reader.readJsonFile(File);
            return ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        }

        static getExplorersAmonutByMission(mission){
            const explorers =Reader.readJsonFile(File);
            return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        }

}

module.exports= ExplorerController
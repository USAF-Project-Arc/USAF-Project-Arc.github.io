
function getTeam(cohort, team) {
    let generalData = require(`./${cohort}/${team}/general.json`)
    let memberData = require(`./${cohort}/${team}/members.json`)
    let projectData = require(`./${cohort}/${team}/projects.json`)
    return {
        ...generalData,
        members: memberData,
        projects: projectData
    }
}

function getTeams(cohort) {
    return require(`/${cohort}/teams.json`)
}

const data = {
    getTeam,
    getTeams
}

export default data
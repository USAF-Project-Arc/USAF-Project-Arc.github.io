# Project Arc Website

[![Website Status](https://img.shields.io/badge/Website-Live-brightgreen)](https://usaf-project-arc.github.io/)
[![Coverage Status](https://coveralls.io/repos/github/USAF-Project-Arc/USAF-Project-Arc.github.io/badge.svg?branch=main)](https://coveralls.io/github/USAF-Project-Arc/USAF-Project-Arc.github.io?branch=main)
[![Test](https://github.com/USAF-Project-Arc/USAF-Project-Arc.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/USAF-Project-Arc/USAF-Project-Arc.github.io/actions/workflows/test.yml)
[![Deploy](https://github.com/USAF-Project-Arc/USAF-Project-Arc.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/USAF-Project-Arc/USAF-Project-Arc.github.io/actions/workflows/deploy.yml)

---

# Adding Data
## Adding A New Team
*Note: Commands assume you  have copied the git project to a local folder and are executing commands from the git root and using linux.*
1. Add a folder for your team in the correct cohort.
    - `mkdir ./src/data/delta/newTeam`
2. Copy the data from the example team.
    - `cp ./src/data/delta/example/* ./src/data/delta/example/newTeam/`
3. Fill in the fields with the correct information.
4. Add the folder name to the [teams.json](./src/data/delta/teams.json) file for the cohort.
5. Commit your changes.
6. Push your changes.

## Adding Icons To Projects
*Note: All icons are links that open the target in a new tab.*

Project `json` object can take the following properties for additional icons added on bottom:

| Property | Icon |
| -------- | ---- |
| video    |   [Icon](https://mui.com/material-ui/material-icons/?query=youtube&selected=YouTube)   | 
| external | [Icon](https://mui.com/material-ui/material-icons/?query=link&selected=Link) |
| image    | [Icon](https://mui.com/material-ui/material-icons/?query=image&selected=Image) |
| source | [Icon](https://mui.com/material-ui/material-icons/?query=github&selected=GitHub) |
| demo   | [Icon](https://mui.com/material-ui/material-icons/?query=launch&selected=Launch) | 

## Adding A New Cohort
*Note: This code should be refactored to match the way teams and automatically imported from folders.*

*Ex: add `./src/data/cohorts.json` and a `getCohorts()` function to `./src/data/data.js`*

1. Add a folder for the cohort to `./src/data`
    - `mkdir ./src/data/epsilon`
2. Add a `teams.json` file that's an empty array.
    - `echo [] >> ./src/data/epsilon/teams.json`
3. Follow the steps for adding team info.
4. Add a `<MenuItem>` for the cohort to [TeamView.js](./src/content/team/TeamView.js).
5. Commit
6. Push

# Adding Functionality

If functionality needs to be added, please branch and send a pull request.

Please try to maintain ~100% code coverage (so we can pretend we know what we're doing).
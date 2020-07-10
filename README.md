# Grafana Panel Plugin Template

<!-- 
[![CircleCI](https://circleci.com/gh/grafana/simple-react-panel.svg?style=svg)](https://circleci.com/gh/grafana/simple-react-panel)
[![David Dependency Status](https://david-dm.org/grafana/simple-react-panel.svg)](https://david-dm.org/grafana/simple-react-panel)
[![David Dev Dependency Status](https://david-dm.org/grafana/simple-react-panel/dev-status.svg)](https://david-dm.org/grafana/simple-react-panel/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/grafana/simple-react-panel/badge.svg)](https://snyk.io/test/github/grafana/simple-react-panel)
[![Maintainability](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/maintainability)](https://codeclimate.com/github/grafana/simple-react-panel/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/test_coverage)](https://codeclimate.com/github/grafana/simple-react-panel/test_coverage) -->

#### Dette repoet er et eksempel på en custom Panel Plugin lagd med grafana-toolkit. For å lage en ny plugin bør den opprettes gjennom grafana-toolkit som har en boilerplate for opprettelse av nye plugins.

### for å lage en plugin med grafana-toolkit kan man følge denne guiden:

1. Last ned Grafana Installer for Windows, og installer på PC: 
https://grafana.com/grafana/download?platform=windows

2. Åpne Tjenester(Services) på Windows og se at Grafana kjører. Åpnes i localhost:3000 

3. installer node: 12 <=  node version < 13 (Bruk nvm hvis du vil ha flere versjoner av node tilgjengelig)

4. https://grafana.com/tutorials/build-a-panel-plugin/#2 (Fra seksjon 2: Set up your environment. For meg er config filen til Grafana som det referes til i guien i "C:\Program Files\GrafanaLabs\conf". Endre pathen i config filen ved åpne den i f.eks vs-code)

5. Første gang, når pluginen opprettes må Grafana restartes. Videre holder det å rebuilde pluginen for å oppdatere den inne i Grafana.

6. Anbefaler å følge step 7 i tutorialen, for å lære litt om hvordan dataen hentes ut inne i React-komponenten.
<br /><br /><br /><br /><br />



This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?
Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

For more information about panels, refer to the documentation on [Panels](https://grafana.com/docs/grafana/latest/features/panels/panels/)

## Getting started
1. Install dependencies
```BASH
yarn install
```
2. Build plugin in development mode or run in watch mode
```BASH
yarn dev
```
or
```BASH
yarn watch
```
3. Build plugin in production mode
```BASH
yarn build
```

## Learn more
- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

# Implementation overview

## Description

This document explains the decisions made and the rationale for this implementation.

## Functional Javascript

Since an efficient code is requested, I have chosen to improve the implementation of the methods a bit.

For example, the `hasMultipleSources` method instead of iterating over all connections using a previously implemented method, it only iterates until it finds more than one input connection:
`// easiest approach but not as performant as the implemented`
`getNodeInputConnections (nodeId, graph) .length> 1;`

## React JS

- All components have their corresponding unit tests and storybook.
- Added the VSCode configuration file that allows to automatically correct linter problems when saving. From my point of view, it is good that the team uses the same programming environment and with the same configuration.
- The chosen folder structure is as follows:
  - /src
    - /components - Reusable components of the project
    - /lib - Custom libraries or adaptations of external libraries
    - /models - Project data model
    - /sections - Project views / screens / pages
- File structure by component:

  - /component-name
    - /index - Exposure of the implementation
    - /component-name - React component
    - /component-name.test - Unit tests
    - /component-name.stories - Storybook
    - /utils - Set of methods with logic
    - /constants - Constant values
    - /components - Internal components

- It is recommendable to use enumerations instead of string literals (for example in `message type`) but since I do not know the possible values ​​I have left it as it was.

- Defined a GitHub workflow to publish automatically the storybook of the project to [GitHub pages](https://adriamarzo.github.io/frontend-challenge-4/).

- The production ready version is available from https://landbot-challenge.netlify.app/

**Next improvements:**

- Refactor the project using Typescript (especially the data model).
- Create acceptance / integration test (I would choose Cypress)

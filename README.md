# Tuist Action

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Tuist Action](https://github.com/tuist/tuist-action/actions/workflows/tuist-action.yml/badge.svg)](https://github.com/tuist/tuist-action/actions/workflows/tuist-action.yml)

This repository contains a [GitHub Action](https://github.com/features/actions) to run Tuist on CI. The action takes care of intalling Tuist if it's not present in the environment.

## Example usage

```yaml
name: My project

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    name: Build
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v1
      - uses: tuist/tuist-action@0.6.0
        with:
          command: 'build'
          arguments: ''
```

## References

- [Creating a Javascript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
- [vercel/ncc](https://github.com/vercel/ncc)
- [@actions/github](https://github.com/actions/toolkit/tree/main/packages/github)
- [@actions/toolkit](https://github.com/actions/toolkit/tree/main/packages/core)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/PhilippeWeidmann"><img src="https://avatars.githubusercontent.com/u/5843044?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Philippe Weidmann</b></sub></a><br /><a href="https://github.com/tuist/tuist-action/commits?author=PhilippeWeidmann" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

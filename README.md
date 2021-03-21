# Tuist Action

[![Tuist Action](https://github.com/tuist/tuist-action/actions/workflows/tuist-action.yml/badge.svg)](https://github.com/tuist/tuist-action/actions/workflows/tuist-action.yml)

This repository contains a [GitHub Action](https://github.com/features/actions) to run Tuist on CI>

## Example usage

```yaml
uses: tuist/tuist-action@0.1.0
with:
  command: "build"
  arguments: "MyTarget"
```
## References

- [Creating a Javascript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
- [vercel/ncc](https://github.com/vercel/ncc)
- [@actions/github](https://github.com/actions/toolkit/tree/main/packages/github)
- [@actions/toolkit](https://github.com/actions/toolkit/tree/main/packages/core)
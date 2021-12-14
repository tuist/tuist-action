# Release

This document contains the steps for releasing a new version of `tuist-action`:

1. Pull the latest commit from `main`.
2. Install dependencies with `npm install`.
3. Add a new section to the [`CHANGELOG.md`](/CHANGELOG.md) that represents the new version.
4. Update the version in the `package.json`.
5. Commit the changes with the name `Version x.y.z`.
6. Tag the commit with the tag `x.y.z`.
7. Push the commit with the tags by running `git push origin main --tags`.
8. Create a new release on GitHub and use the content of the CHANGELOG section as release notes.

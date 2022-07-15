# React-Native boilerplate

## Motivation

Getting tired of writing the same code over and over to set up new applications ? This should help ;)

## What's inside

- TypeScript
- Redux toolkit with RTK Query
- i18n
- React-navigation
- Styled components
- Clean folder structure
- Standard version to manage the versioning of your app
- Husky for clean commits
  More information [here](package.json)

## How to use

##### 0 - Create your app

If you haven't created your react-native typescript project yet :

```
npx react-native init MyApp --template react-native-template-typescript
```

And setup your git repository (otherwise husky won't be setup)

[More info](https://reactnative.dev/docs/typescript)

##### 1 - Edit your package.json

Add new scripts :

```
"scripts": {
  ...
  "prepare": "husky install",
  "commit": "git-cz",
  "release": "standard-version"
}
```

Paste this at the end :

```
"husky": {
    "hooks": {
      "pre-commit": "",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "standard-version": {
    "types": [
      {
        "type": "feat",
        "section": "Features"
      },
      {
        "type": "fix",
        "section": "Bug Fixes"
      },
      {
        "type": "refactor",
        "hidden": false,
        "section": "Refactors"
      }
    ]
  },
```

##### 2 - Run script

```bash
./setupProject.sh path/to/your/app/
```

##### 3 - Ready to go

```
yarn start
```

```
yarn ios / android
```

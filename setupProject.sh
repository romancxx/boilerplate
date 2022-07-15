# Copying sources
cp -r ./src $1
cp .babelrc $1
cp metro.config.js $1
cp tsconfig.json $1
cp .prettierrc.js $1
cp App.tsx $1

cd $1

# Installing dependencies
yarn add @react-navigation/native @react-navigation/native-stack @reduxjs/toolkit i18n-js react-native-safe-area-context react-native-screens react-redux

# Installing dev dependencies
yarn add standard-version metro-react-native-babel-preset babel-plugin-module-resolver husky --dev

# Setup husky
yarn prepare

cd ios

pod install

# @lambda-it/parlamentsdienste-component-library - Icon issue 
## Reason of existence
This repository represents a minimal vue setup which uses the `@lambda-it/parlamentsdienste-component-library` - 
`pd-icon` component. This component should display an icon, but unfortunately it generates an error.

## Steps to reproduce
1. Add a personal access token to the `.npmrc` file after `...ithub.com:_authToken=XXX` which is able to read packages
4. Login into your GitHub packages registry `npm login --registry=https://npm.pkg.github.com` and use your generated 
personal access token as password
5. Install the dependencies `npm i`
6. Run the project `npm run serve`

## Expected behaviour
The page should display the `cancel` icon.

## Actual behaviour
The icon doesn't appear and generates an error:
```
This page contains the following errors:
error on line 9 at column 1618: Opening and ending tag mismatch: link line 9 and head
```
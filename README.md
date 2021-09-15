# E-commerce Shop

Application created with CRA, uses:
- `react-router-dom`
- `material-ui`
- `react-hook-form` and schema-based form validation with `yup`
- `styled-components`
- `react-hooks`

## Info about the construction of the application

Application uses ready-made visual components from the `Material-ui` library enriched by CSS styles.
Entire server with the data was created with the help of the `Commerce.js` library, 
which uses ready-made functions and classes to:
- downloading currently available products,
- changes to the contents of the basket,
- going through the payment stage.

## Preparation for download (with npm)

After download/clone repo use `npm install`.
First thing first you have to do is create `.env` file.
Next paste `REACT_APP_CHEC_PUBLIC_KEY=` with your API_KEY from https://dashboard.chec.io/settings/developer

## Run project

Run the app in the development mode with command `npm start`.

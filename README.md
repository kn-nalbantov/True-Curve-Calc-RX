# True Curve Calculator
Support app for RX labs 

## Basic usage:

May find use in RX ophtalmological labs which produce perscription lenses out of semi-finished blanks using free-form or conventional technology.
An optician can use the app to calculate the true curve of a semi-finished blank based on the measurement of a [comparator](https://en.wikipedia.org/wiki/Digital_comparator), whoose 0-value is set to be a flat surface.
This is especially valuable when different blanks show minor variations on a per unit basis or when the distributor fails to supply a detailed table with measurements for their products.

## Steps:

1. Measure the convex surface of the semi-finish. Input the data.
2. Choose the index of refraction (based on material used)
3. Correct for diopter power (optional)
4. Click calculate

## App deployment

In order to use the app run the command ` npm run make ` and use the distributable file in the out/ directory of the app

**Disclaimer**
--Project for work
This is an app I made for myself and a small set of colleagues at the company I work in. It is specific to our work environment - the machines, software and products that we use and it **may NOT** be useful to everyone. Please note that the coefficient I use to make measurements in this app are based on work practices in our lab and are not guaranteed to work outside of it.
 

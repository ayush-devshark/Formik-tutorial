# Formik Tutorial

-   initialValues properties similar to 'name' attribute of form fields
-   fromik.values = 'values of fields'
-   formik.errors = 'object containing errors of fields'
-   fomik.touched = 'object containig boolean on Blur even'

-   ...formik.getFieldProps = Helper method for onChange, OnBlur and value prop

## Component

-   Formik - use this instead of useFormik hook, works as context provider
-   Form - wrapper around form component
-   Field - input tag, don't need to specify getFieledProps
-   ErrorMessage = Field visited and error exists

-   Nested objects = In initialValues, use '.' in name attribute to access property of object
-   Groupinf fields as Array object

-   FieldArray Component = Dynamic form fields
-   FastField = optimised version of Field Component, independent of other fields in form

-   validateOnChange, validateOnBlur = Telling formik not to validate on change, blur event (true by default)

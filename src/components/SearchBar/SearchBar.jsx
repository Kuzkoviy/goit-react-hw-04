
import { Formik, Field, Form } from 'formik';



function SearchBar({onSearch}) {
  return (
        <Formik 
        initialValues={{topic: ''}}
        onSubmit={(values, actions) => {
            onSearch(values.topic);
            actions.resetForm();
        }}>
            <Form>
                <Field type = 'text' name = 'topic'/>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
  )
}


export default SearchBar

import { Formik, Field, Form } from 'formik';
import css from '../SearchBar/SearchBar.module.css'



function SearchBar({onSearch}) {

    
  return (
        <Formik 
        initialValues={{topic: ''}}
        onSubmit={(values, actions) => {
            onSearch(values.topic);
            actions.resetForm();
        }}>
            <Form className={css.form}>
                <Field type = 'text' name = 'topic' className={css.input}/>
                <button type='submit' className={css.button}>Submit</button>
            </Form>
        </Formik>
  )
}


export default SearchBar
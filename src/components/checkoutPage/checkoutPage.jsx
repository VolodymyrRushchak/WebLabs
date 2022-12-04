import { Form, Formik, useField } from "formik";
import * as Yup from 'yup';
import Footer from "../footer/footer";
import Header from "../header/header";
import ErrorMessage from "./errorMessage";
import styles from './checkoutPage.module.css';
import { Link } from "react-router-dom";


const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
        <div className={styles.inputDiv}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={ label === 'Address' ? styles.addressInput : styles.textInput} {...field} {...props } />
            {meta.touched && meta.error ? <ErrorMessage error={meta.error}/> : null}
        </div> 
        </>
    );
}


export default function CheckoutPage() {
    return (
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: ''
        }}

        validationSchema={Yup.object({
            firstName: Yup.string()
                .max(17, 'Must be 17 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(17, 'Must be 17 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number.')
                .required('Required'),
            address: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required')
        })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
            
        }}
        >
            {props => (
                <>
                <Header/>
                <Form>
                    <h1 className={styles.title}>Checkout</h1>
                    <div className={styles.outer}>
                    <div className={styles.mainDiv}>
                        <div className={styles.columnDiv}>
                            <TextInput label='First Name' name='firstName' type='text' placeholder='John' />
                            <TextInput label='Email' name='email' type='text' placeholder='jeff@gmail.com'/>
                        </div>
                        <div className={styles.columnDiv}>
                            <TextInput label='Last Name' name='lastName' type='text' placeholder='Connor' />
                            <TextInput label="Phone" name='phone' type='text' placeholder='0964711358' />
                        </div>
                    </div>
                    <TextInput label='Address' name='address' type='text' placeholder='New York street' />
                    </div>
                </Form>
                <div className={styles.buttonDiv}>
                    <Link to='/cart'>
                        <button className={styles.button}>Go Back</button>
                    </Link>
                    <button className={styles.button}>Continue</button>
                </div>
                <Footer/>
                </>
            )}
        </Formik>
    );
}
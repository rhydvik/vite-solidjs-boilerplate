import { Match, Switch, createSignal } from 'solid-js';

import Form1 from './Forms/Form1';
import { styles } from './Forms/styles';
import Form2 from './Forms/Form2';
function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhoneNumber(phone: string) {
  return /^\d{10}$/.test(phone);
}

export default function Solid() {
  const [socialFields, setSocialFields] = createSignal({
    linkedin: '',
    facebook: '',
    youtube: '',
    instagram: '',
    personalWebsite: '',
  });

  const [formData, setFormData] = createSignal({
    firstName: '',
    lastName: '',
    email: '',
    address: {
      city: '',
      zip: '',
      state: '',
      country: '',
      address1: '',
      address2: '',
    },
    phoneNumber: '',
  });

  const [errors, setErrors] = createSignal({
    firstName: '',
    lastName: '',
    email: '',
    address: {
      city: '',
      zip: '',
      state: '',
      country: '',
      address1: '',
      address2: '',
    },
    phoneNumber: '',
  });

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    address: {
      city: string;
      zip: string;
      state: string;
      country: string;
      address1: string;
      address2: string;
    };
    phoneNumber: string;
  };

  const [activeForm, setActiveForm] = createSignal(1);

  const validateForm = (formData: FormData) => {
    const {
      firstName,
      lastName,
      email,
      address: { city, zip, state, country, address1 },
      phoneNumber,
    } = formData;

    const errors = {
      firstName: firstName.trim() === '' ? 'First Name is required' : '',
      lastName: lastName.trim() === '' ? 'Last Name is required' : '',
      email: !validateEmail(email) ? 'Valid email is required' : '',
      address: {
        city: city.trim() === '' ? 'City is required' : '',
        zip: zip.trim() === '' ? 'ZIP Code is required' : '',
        state: state.trim() === '' ? 'State is required' : '',
        country: country.trim() === '' ? 'Country is required' : '',
        address1: address1.trim() === '' ? 'Address Line 1 is required' : '',
        address2: '',
      },
      phoneNumber: !validatePhoneNumber(phoneNumber)
        ? 'Valid 10-digit phone number is required'
        : '',
    };
    return errors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm(formData());

    setErrors(newErrors);
    const isFormValid = Object.values(newErrors).every(
      (error) =>
        typeof error === 'string' ||
        (typeof error === 'object' &&
          Object.values(error).every((subError) => subError === '')),
    );

    if (isFormValid) {
      setActiveForm(2);
    }
  };

  return (
    <div style={{ ...styles.container, 'flex-direction': 'column' }}>
      <div>
        <div style={styles.tabsContainer}>
          <div
            style={{
              ...styles.tab,
              ...(activeForm() === 1 ? styles.tabActive : {}),
            }}
            onClick={() => setActiveForm(1)}
          >
            Form 1
          </div>
          <div
            style={{
              ...styles.tab,
              ...(activeForm() === 2 ? styles.tabActive : {}),
            }}
            onClick={() => setActiveForm(2)}
          >
            Form 2
          </div>
        </div>
        <h1>{`Form ${activeForm()}`}</h1>
        <Switch fallback={<div>Form not found</div>}>
          <Match when={activeForm() === 1}>
            <Form1
              formData={formData()}
              errors={errors()}
              setFormData={setFormData}
            />
          </Match>
          <Match when={activeForm() === 2}>
            <Form2
              socialFields={socialFields()}
              setSocialFields={setSocialFields}
            />
          </Match>
        </Switch>
      </div>
      <div style={styles.form}>
        <button
          type="button"
          style={styles.button}
          onClick={() =>
            setActiveForm(activeForm() === 1 ? 1 : activeForm() - 1)
          }
        >
          {activeForm() === 1 ? 'Next' : 'Prev'}
        </button>
        <button
          type="submit"
          style={{ ...styles.button, float: 'right' }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
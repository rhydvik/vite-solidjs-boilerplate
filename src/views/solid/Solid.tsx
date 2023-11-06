/* eslint-disable */
import { createSignal } from 'solid-js';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhoneNumber(phone: string) {
  return /^\d{10}$/.test(phone);
}

export default function Solid() {
  const styles = {
    container: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      height: '100vh',
      'max-width': '100vw',
      'margin-top': '40px',
    },
    addressContainer: {
      display: 'grid',
      'grid-template-columns': '1fr 1fr',
      'grid-gap': '10px',
      border: '1px solid #ccc',
      padding: '12px 24px',
      margin: '12px 0',
      'border-radius': '5px'
    },
    form: {
      'width': '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      'border-radius': '8px',
      'background-color': '#f5f5f5',
    },
    label: {
      display: 'block',
      'margin-bottom': '5px',
      'font-weight': 'bold',
    },
    input: {
      width: '100%',
      padding: '8px 2px',
      margin: '5px 0',
      'border-radius': '5px',
      border: '1px solid #ccc',
    },
    error: {
      color: 'red',
      'font-size': '0.8rem',
      'margin': '5px 0'
    },
    button: {
      'background-color': 'blue',
      color: 'white',
      padding: '10px 15px',
      'border-radius': '5px',
      border: 'none',
      cursor: 'pointer',
    },
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      address: { city, zip, state, country, address1, address2 },
      phoneNumber,
    } = formData();

    const newErrors = {
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
    setErrors(newErrors);

    if (
      Object.values(newErrors).every(
        (error) =>
          typeof error === 'string' ||
          (typeof error === 'object' &&
            Object.values(error).every((subError) => subError === ''))
      )
    ) {
      console.log('Form submitted:', formData());
    }
  };

  return (
    <div style={{...styles.container, "flex-direction": 'column'}}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label html-for="firstName" style={styles.label}>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData().firstName}
            onInput={(e) =>
              setFormData({ ...formData(), firstName: e.target.value })
            }
            style={styles.input}
          />
          <p style={styles.error}>{errors().firstName}</p>
        </div>
        <div>
          <label html-for="lastName" style={styles.label}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData().lastName}
            onInput={(e) =>
              setFormData({ ...formData(), lastName: e.target.value })
            }
            style={styles.input}
          />
          <p style={styles.error}>{errors().lastName}</p>
        </div>
        <div>
          <label html-for="email" style={styles.label}>Email:</label>
          <input
            type="text"
            id="email"
            value={formData().email}
            onInput={(e) => setFormData({ ...formData(), email: e.target.value })}
            style={styles.input}
          />
          <p style={styles.error}>{errors().email}</p>
        </div>
        <div style={styles.addressContainer}>
          <div>
            <label html-for="address1" style={styles.label}>Address Line 1:</label>
            <input
              type="text"
              id="address1"
              value={formData().address.address1}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, address1: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.address1}</p>
          </div>
          <div>
            <label html-for="address2" style={styles.label}>Address Line 2:</label>
            <input
              type="text"
              id="address2"
              value={formData().address.address2}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, address2: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.address2}</p>
          </div>
          <div>
            <label html-for="city" style={styles.label}>City:</label>
            <input
              type="text"
              id="city"
              value={formData().address.city}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, city: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.city}</p>
          </div>
          <div>
            <label html-for="zip" style={styles.label}>ZIP Code:</label>
            <input
              type="text"
              id="zip"
              value={formData().address.zip}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, zip: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.zip}</p>
          </div>
          <div>
            <label style={styles.label} html-for="state">State:</label>
            <input
              type="text"
              id="state"
              value={formData().address.state}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, state: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.state}</p>
          </div>
          <div>
            <label html-for="country" style={styles.label}>Country:</label>
            <input
              type="text"
              id="country"
              value={formData().address.country}
              onInput={(e) =>
                setFormData({
                  ...formData(),
                  address: { ...formData().address, country: e.target.value },
                })
              }
              style={styles.input}
            />
            <p style={styles.error}>{errors().address.country}</p>
          </div>
        </div>
        <div>
          <label html-for="phoneNumber" style={styles.label}>Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={formData().phoneNumber}
            onInput={(e) =>
              setFormData({ ...formData(), phoneNumber: e.target.value })
            }
            style={styles.input}
          />
          <p style={styles.error}>{errors().phoneNumber}</p>
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

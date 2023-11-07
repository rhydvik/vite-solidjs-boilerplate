import { styles } from './styles';

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

interface Form1Props {
  formData: () => FormData;
  setFormData: (formData: FormData) => void;
  errors: () => FormData;
}
export const Form1 = ({ formData, errors, setFormData }: Form1Props) => {
  /*eslint-disable */
  return (
    <form style={styles.form}>
      <div>
        <label html-for="firstName" style={styles.label}>
          First Name:
        </label>
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
        <label html-for="lastName" style={styles.label}>
          Last Name:
        </label>
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
        <label html-for="email" style={styles.label}>
          Email:
        </label>
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
          <label html-for="address1" style={styles.label}>
            Address Line 1:
          </label>
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
          <label html-for="address2" style={styles.label}>
            Address Line 2:
          </label>
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
          <label html-for="city" style={styles.label}>
            City:
          </label>
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
          <label html-for="zip" style={styles.label}>
            ZIP Code:
          </label>
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
          <label style={styles.label} html-for="state">
            State:
          </label>
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
          <label html-for="country" style={styles.label}>
            Country:
          </label>
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
        <label html-for="phoneNumber" style={styles.label}>
          Phone Number:
        </label>
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
    </form>
  );
};

export default Form1;

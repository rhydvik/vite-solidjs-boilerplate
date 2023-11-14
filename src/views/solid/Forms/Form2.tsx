import { styles } from './styles';

type socialFields = {
  linkedin: string;
  facebook: string;
  youtube: string;
  instagram: string;
  personalWebsite: string;
};

interface Form2Props {
  socialFields: socialFields;
  setSocialFields: (socialFields: socialFields) => void;
}

const Form2 = (props: Form2Props) => {
  return (
    <form style={styles.form}>
      <label style={styles.label}>LinkedIn:</label>
      <input
        style={styles.input}
        type="text"
        name="linkedin"
        value={props.socialFields.linkedin}
        onInput={(e) =>
          props.setSocialFields({
            ...props.socialFields,
            linkedin: e.target.value,
          })
        }
      />
      <label style={styles.label}>Facebook:</label>

      <input
        style={styles.input}
        type="text"
        name="facebook"
        value={props.socialFields.facebook}
        onInput={(e) =>
          props.setSocialFields({
            ...props.socialFields,
            facebook: e.target.value,
          })
        }
      />
      <label style={styles.label}>YouTube:</label>

      <input
        style={styles.input}
        type="text"
        name="youtube"
        value={props.socialFields.youtube}
        onInput={(e) =>
          props.setSocialFields({
            ...props.socialFields,
            youtube: e.target.value,
          })
        }
      />
      <label style={styles.label}>Instagram:</label>

      <input
        style={styles.input}
        type="text"
        name="instagram"
        value={props.socialFields.instagram}
        onInput={(e) =>
          props.setSocialFields({
            ...props.socialFields,
            instagram: e.target.value,
          })
        }
      />
      <label style={styles.label}>Personal Website:</label>
      <input
        style={styles.input}
        type="text"
        name="personalWebsite"
        value={props.socialFields.personalWebsite}
        onInput={(e) =>
          props.setSocialFields({
            ...props.socialFields,
            personalWebsite: e.target.value,
          })
        }
      />
    </form>
  );
};

export default Form2;

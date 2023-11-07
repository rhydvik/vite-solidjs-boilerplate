import { styles } from './styles';

type socialFields = {
  linkedin: string;
  facebook: string;
  youtube: string;
  instagram: string;
  personalWebsite: string;
};

interface Form2Props {
  socialFields: () => socialFields;
  setSocialFields: (socialFields: socialFields) => void;
}

const Form2 = ({ socialFields, setSocialFields }: Form2Props) => {
  return (
    <form style={styles.form}>
      <label style={styles.label}>LinkedIn:</label>
      <input
        style={styles.input}
        type="text"
        name="linkedin"
        value={socialFields().linkedin}
        onInput={(e) =>
          setSocialFields({ ...socialFields(), linkedin: e.target.value })
        }
      />
      <label style={styles.label}>Facebook:</label>

      <input
        style={styles.input}
        type="text"
        name="facebook"
        value={socialFields().facebook}
        onInput={(e) =>
          setSocialFields({ ...socialFields(), facebook: e.target.value })
        }
      />
      <label style={styles.label}>YouTube:</label>

      <input
        style={styles.input}
        type="text"
        name="youtube"
        value={socialFields().youtube}
        onInput={(e) =>
          setSocialFields({ ...socialFields(), youtube: e.target.value })
        }
      />
      <label style={styles.label}>Instagram:</label>

      <input
        style={styles.input}
        type="text"
        name="instagram"
        value={socialFields().instagram}
        onInput={(e) =>
          setSocialFields({ ...socialFields(), instagram: e.target.value })
        }
      />
      <label style={styles.label}>Personal Website:</label>
      <input
        style={styles.input}
        type="text"
        name="personalWebsite"
        value={socialFields().personalWebsite}
        onInput={(e) =>
          setSocialFields({
            ...socialFields(),
            personalWebsite: e.target.value,
          })
        }
      />
    </form>
  );
};

export default Form2;

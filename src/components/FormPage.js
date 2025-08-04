import styles from './FormPage.module.css';

export default function FormPage({ title, children, buttonText, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
    alert('Funcionalidade não implementada.');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
        <button type="submit" className={styles.submitButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export function FormField({ label, type, placeholder, value, onChange }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={styles.input} 
        required 
      />
    </div>
  );
}

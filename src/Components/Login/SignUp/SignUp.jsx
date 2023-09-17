import React from 'react';
import styles from './SignUp.module.css';
import SideImage from '../../../assets/side_image.png';
import GoogleIcon from '../../../assets/Icon_google.svg';
import Input from '../../Form/Input';
import { Link } from 'react-router-dom';
import { POST_USER } from '../../../api';

const SignUp = () => {
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { options, url } = POST_USER({ name, mail, login, password });
    const dados = await fetch(url, options);
    const json = await dados.json();
    console.log(json);
  }

  return (
    <section className={`${styles.signUp} container `}>
      <div className={`${styles.imgContainer} slideLeft`}>
        <img src={SideImage} alt="" />
      </div>
      <form className={`${styles.form} slideRight`} onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <Input type="text" value={name} setValue={setName} placeholder="Name" />
        <Input
          type="text"
          value={mail}
          setValue={setMail}
          placeholder="Email"
        />
        <Input
          type="text"
          value={login}
          setValue={setLogin}
          placeholder="Login"
        />
        <Input
          type="text"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <button className={styles.registerBtn}>Create an account</button>
        <button className={styles.googleBtn}>
          <img src={GoogleIcon} /> Sign up with Google
        </button>
        <p className={styles.alreadyAccount}>
          Already have account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;

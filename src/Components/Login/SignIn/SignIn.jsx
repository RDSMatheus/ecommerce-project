import React from 'react';
import styles from './SignIn.module.css';
import SideImage from '../../../assets/side_image.png';
import Input from '../../Form/Input';
import { UserContext } from '../../../GlobalContext';

const SignIn = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(login, password) {
    await userLogin({ login, password });
    console.log('logou');
  }

  return (
    <section className={`${styles.signIn} container `}>
      <div className={`${styles.imgContainer} slideLeft`}>
        <img src={SideImage} alt="" />
      </div>
      <form className={`${styles.form} slideRight`} onSubmit={handleSubmit}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <Input
          type="text"
          value={login}
          setValue={setLogin}
          placeholder="Email"
        />
        <Input
          type="text"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <div className={styles.buttonContainer}>
          <button className={styles.loginBtn}>Log In</button>
          <p>Forget Password?</p>
        </div>
      </form>
    </section>
  );
};

export default SignIn;

import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        let isValid = true;
        setEmailError(false);
        setPasswordError(false);
        setEmailErrorMessage('');
        setPasswordErrorMessage('');

        // E-posta doğrulama
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError(true);
            setEmailErrorMessage('E-posta alanı boş olamaz.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Geçerli bir e-posta adresi giriniz.');
            isValid = false;
        }

        // Şifre doğrulama
        if (!password) {
            setPasswordError(true);
            setPasswordErrorMessage('Şifre alanı boş olamaz.');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Şifreniz en az 6 karakter olmalıdır.');
            isValid = false;
        }

        // Başarılı doğrulama
        if (isValid) {
            console.log("Giriş başarılı!");
        }
    };

    return (
        <div className='login-section'>
            <div className="login-left-section">
                <div className="left-section-bg">
                    <img src="assets/auth/bg12.jpg" alt="" />
                    <div className="text-area">
                        <h4>İmkanın sınırını görmek için imkansızı denemek lazım.</h4>
                        <h6>Fatih Sultan Mehmed</h6>
                    </div>
                </div>
            </div>
            <div className="login-right-section">
                <div className="logo">
                    <img src="assets/features-logos/vue-pania.png" alt="" />
                    <b>malarmus.</b>
                </div>
                <div className="form-section">
                    <div className="form-head">E-posta ile giriş yap</div>
                    <div className="form-area">
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={emailError ? 'input-error' : ''}
                                />
                            </div>
                            {emailError && <p className="error-message">{emailErrorMessage}</p>}
                            <div className="input-container">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={passwordError ? 'input-error' : ''}
                                />
                            </div>
                            {passwordError && <p className="error-message">{passwordErrorMessage}</p>}
                            <div className="button-container">
                                <button type='submit' className='loginButton'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="register-section">
                    <hr />
                    <button className='registerNavigatebutton'>Hesabınız yok mu?</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

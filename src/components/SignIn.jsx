import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Add your authentication logic here

        // After successful login, redirect to homepage
        navigate('/home');
    };

    return (
        <div className="sign-in-container">
            <div className="login-form">
                <h1>Login</h1>
                <p>
                    By clicking Sign in below, I agree to the <a href="#" className="link">Terms of Use</a> and I accept the <a href="#" className="link">Privacy Policy</a>.
                </p>

                <button className="social-btn google-btn">
                    <img src="data:image/png;base64,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" alt="Google" className="icon" />
                    Sign in with Google
                </button>
                <button className="social-btn apple-btn">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///97e3vy8vL7+/v39/fh4eFtbW3FxcW/v7+goKDs7Ozo6OgxMTFcXFyUlJTQ0NDMzMyKioq5ubmqqqpMTEw7OzvX19dCQkKZmZkmJiaDg4NjY2MZGRmNjY1VVVV2dnYdHR0qKiqoqKgPDw9OTk44ODgTExOuRXsVAAAIoElEQVR4nN2d53biQAyFTQcDIbTQgyGb5P3fcCm7OQZGzSMsOfd3jsdfbKZIV3JS86jmYLrKPtdJpnCtROEaymqnnV3yT934y3kj7M/mSU4f8Vf0Rfj6ktxqFX9NT4S9ZXKv9/ir+iHsDR/4kmQSf10vhIt9gC9JNvFX9kHYyIJ8v+ct7f4BAH/JTNOsQ3y/ZLVor2HAZBp/fXPCKcKXJIv4AawJVyhg0o8fwZhwgwMOW/FD2BJ2cMDkRWEMU0JkEr1KYcE3JSRe0ZN6CqMYEo5IwGSgMIwdIb5MXPSmMY4ZYZsGTEYaA5kRYjuZ/3rVGMiKkJxGz1IZyYiwywFUOFjUrAhbRw6hxkxqRUivhCftdcYyIeTMozrLfc2I8D5mGJTKYlizIXxlPUKFw+9FFoRzGi9JdlqjGRCOS32EFoRbDqDWr9CCkDeRKgRo/ql8QtZaWNcbr3xCDuBOIT7zM57epXjqcQiVFvuLSiekgk/K72j5hE0G4FJ1xLIJOcemtuqIZRMyZlLNH2GtfEJ6xzZTHrFkwsaOAtQ52OdUMuGCAlRI3N+pZMIZAaiQ1b5XyYQTHFAh5fugkgkzFFB5Fr2qZEJsR3PUO0/kVTLhJwy4bT5nyHIJmyHf01VqZ/p7OSHsKCTsAZX8lj56885ajp84ZMmEoUjp4Wkv6EXmc+lewQaMypZwOdE9KYVkuGvbr8J47fF0Nal3ss3oo9cdR/8LdAgXszSbH78vv6q3TjptgH/5sZ8v951JOg2mzlq90eNctN6uuhFrZTRhf1r/Cswe9VlbeFeN6QZeLZP5exf+t6GKI1xMwtP/RV8Tfh6+P6Uj4X+yQo8ygrA/IjO56wlrrzllpdtO2tXle9fChGPmXR1S4u1asEwLPxLvDgoSBgoHYHXgt6ufvon4zvqUraCFCLsSvrOO4XWvx0pDPWopYSxA2A4XDhD6mt3lIhYb0L9O64W/UxcTNt8L31bnZ51stlNkZWApfRbha9ydzeuj6ey9w7LTEOI+RiEhwzFZmv7wfo0iwgbLY1CeWG+qhJDnEilTnDScgJBheS1dW01CojLCSLT5jU1IRKvNNNci9ApIv6hMwuLL/PNFFGXwCFNrClR4ypFFSOXErIWetDmE/tbBO+2wIyiDsE9mps2FVYAxCKWHQQsh9gaa0O86kRMyn5KE7n+EFyFxY4qw6f9HePoZxsw0LDeosXCPEUFI+l/sNSQyGwSh/3l0S5ltcUKW3dVU9BkYJ+QUCZqKUYOJEno81d+I46FCCQNpM1diGTUxQu+PkGfUxAjlSZNSxfS7I4SsSlY7cTtKIIScugE7fTEBEcKWNQMudvIJJvQduuD7qGBC10uFoGUkSMgrorOSoPILJHR9tJd4/UBCz4vhpwAQJHT9kopMNRCh5x1bRwIIEmbWGIhkdkWAELGcm0vYLwMgHFhjIBLavgDCD2sMWGsZIEToOIjItgrhhI5jbNK+PAChNQYsMm/PI+xbc8AS15iGCR0f78Um4TCh37Pht9jPHib0G8CQt8cKE/qdSuWFwmFCDf/ncyQvpA0T+k2LylspBgkbEQ7sJ0teBhUk9Hv8/ZZXzQQJ/WZ+pdtuiJDXb8xCRyVCv1ua4a8nLNB+qGKE4pNF5QjZGSeC0K8FQ2su9Ut4+PWEWiu+44C3vH9GxWaaAj0xK7anKfCpuSChY9esvNV+xXbewrwTSOj39FRgUxMkdBwulU+mQcKm3zO+PFBTtTiNvHtrmNBxflS8Mw0TcjtxWEgaiwoTei43lHbHrFreIhF/m6VyuSfxbBomdLzkCx1RFcwBJ9LzRRUJGW0GaELPy4UwPQMQeuph8igNb6LjOMZZCv5Sz6eLs+I9wi3He++zBAdhaIfge6rR8Oo7NrZdxd6AQ4R+g8L/dIgldL1vuyi67smzV/8qZlUJSJhZA9DinRRBQvc/xIT5QWSQ0LPT+0dx3cwO1rfPEWPlhwndr4gXLUk3JkzoOpKRE3WUQuI61rfO1QbPC1e2DjinIRrWQAidnxHzwny1CGHD+r4lgs8aWHzV+wnqRksojIoRuo58P2oYfo4YYSW2NXkFFw40C1CorbWhgg+x2v1p7hQs+sIzOda3LFPYfIoTypr6WyvckAcndGwdCii8CSfyjX6LZx4FlEQRhL7zF7cCtjUEoffofk4H4IhBZcUz6xtnC9p9U4TVmWugIDjpbPBbingrMEBMElYhqngWaK2l3SmOXXw5fYP3TxP67lb+X3ARO03oPVl6FZwUZnioqvAQkRQGg7D1bX3/tJBmGRwfnM9vd+SF5S84hE1rAFJYypvlZfT+ENEUFIvQs7P9LDQ7w/Oj+g7Y4LlgpuPW2aesboUn2JiEjmu9qMZRXNd0wS8VlqAhUXTJJfR72Kfq9djOd68FCmRLHjah1z6DpL+NX73gM55BV1wK6jM8mjPe6NsWEDYdOmwYnnZJjY2/RZFj+xJVEXlL1MDBmaKE3uZTVt2FrBLM13zKq1wX1rp5ytQwy7ql1XyOQuDMRqZSQj/+DNYnWAoQujkMswvYxIROtjYHdl2QnNDHT5Hf8roAoYejoqCguwChg4QbY8MdRWh/Gpa02i1EaB210aiSpWT6ERruShhFaOkfZlXKRBMaNlqS1aoXJzQrx+AW5cUTGiHOxU33ihOaIC6VugoyVXDl3x2ORb/+WQAwilD8FJeb2WLQbzRajf5g0O6OtsK8ZFYAMI6w1uYHGNfpa+D++jOBW1784QcFwlqTV3XytoKD763pJw9Q3jLxokhC1h41o3ZZ7QltaNnLu7FfFU1YG+PTxjrlbJNbU6J2XLZTyyueEA3AvfBPqgukGnAj6PRxLw3CWmMTfMvmqey7PsC0c1zJG8/mpEJ4Yny4uS0yucAazLLbY8twMy6yROSkRHhSo5duh6fVYz3PVrN2xG21xrOPdFTvbNKPsfirMo/6CyOsjq0BEBJeAAAAAElFTkSuQmCC" alt="Apple" className="icon" />
                    Sign in with Apple
                </button>

                <p className="or">or</p>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email or Swag Name</label>
                        <input type="text" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" name="remember-me" /> Remember me
                        </label>
                        <a href="#" className="forgot-link">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-btn">Sign in</button>
                </form>

                <p className="join-text">Not a member? <a href="#" className="join-link">Join today</a></p>
            </div>
        </div>
    );
};

export default SignIn;

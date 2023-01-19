import * as RiIcon from "react-icons/ri";
import "./Auth.scss";
import { useState } from "react";
const Auth = () => {
  const [show, setShow] = useState(false);

  return (
        <section className="auth">
          <div className="auth-container container ">
            <div className="auth-container__form">
              <div className="auth-container__form-icon">
                <RiIcon.RiUser3Line size={28} />
              </div>
              <h4 className="auth-container__form-title">ورود / ثبت نام </h4>
              <div className="auth-container__form-items">
              <span
                  onClick={() => setShow(!show)}
                  className={
                    show === false
                        ? "auth-container__form-items__text active-text"
                        : "auth-container__form-items__text"
                  }
              >
                {" "}
                شماره موبایل{" "}
              </span>
                <span
                    onClick={() => setShow(!show)}
                    className={
                      show
                          ? "auth-container__form-items__text active-text"
                          : "auth-container__form-items__text"
                    }
                >
                {" "}
                  ایمیل{" "}
              </span>
              </div>
              <div className="auth-container__form-box">
                {show === false ? (
                    <input
                        type="text"
                        placeholder="شماره موبایل"
                        className="auth-container__form-box__inputs"
                        dir="ltr"

                    />
                ) : (
                    <input
                        type="email"
                        placeholder="ایمیل کاربری"
                        className="auth-container__form-box__inputs"
                        dir="ltr"
                    />
                )}
                <button className="auth-container__form-box__btn">
                  دریافت رمز
                </button>
              </div>
            </div>
          </div>

        </section>
  );
};

export default Auth;

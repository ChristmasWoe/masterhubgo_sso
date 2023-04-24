import React,{useState} from "react";
import "./ComplexInput.scss";

const ComplexInput = ({onChange,label,value,isPassword,placeholder,error,onBlur,onFocus,...props}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ marginTop: "18px" }} className="login-input-wrap">
          <h3>{label}</h3>
          <span>
            <input
              onChange={onChange}
              onBlur={(e)=>{
                if(onBlur){
                    onBlur(e);
                }
              }}
              onFocus={(e)=>{
                if(onFocus){
                    onFocus(e);
                }
              }}
              value={value}
              type={isPassword&&!showPassword ?"password": "text"}
              placeholder={placeholder}
              className={error ? "error" : ""}
            />
            {!isPassword?null: showPassword ? (
              <svg
                onClick={(e) => setShowPassword(!showPassword)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 5C8.24249 5 5.4359 7.4404 3.76725 9.43934C2.51508 10.9394 2.51508 13.0606 3.76725 14.5607C5.4359 16.5596 8.24249 19 11.9999 19C15.7573 19 18.5639 16.5596 20.2325 14.5607C21.4847 13.0606 21.4847 10.9394 20.2325 9.43934C18.5639 7.4404 15.7573 5 11.9999 5Z"
                  stroke="#525252"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9C10.343 9 8.99988 10.3431 8.99988 12C8.99988 13.6569 10.343 15 11.9999 15Z"
                  stroke="#525252"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={(e) => setShowPassword(!showPassword)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.76404 5.29519C10.4664 5.10724 11.2123 5 12 5C15.7574 5 18.564 7.4404 20.2326 9.43934C21.4848 10.9394 21.4846 13.0609 20.2324 14.5609C20.0406 14.7907 19.8337 15.0264 19.612 15.2635M12.5 9.04148C13.7563 9.25224 14.7478 10.2437 14.9585 11.5M3 3L21 21M11.5 14.9585C10.4158 14.7766 9.52884 14.0132 9.17072 13M4.34914 8.77822C4.14213 9.00124 3.94821 9.22274 3.76762 9.43907C2.51542 10.9391 2.51523 13.0606 3.76739 14.5607C5.43604 16.5596 8.24263 19 12 19C12.8021 19 13.5608 18.8888 14.2744 18.6944"
                  stroke="#525252"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
          {error && <p>{error}</p>}
        </div>
    )
}

export default ComplexInput;
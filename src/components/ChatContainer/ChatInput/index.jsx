import React from "react";
import scss from "./index.module.scss";
export default function ChatInput({onSubmit}) { 
  const [value, setValue] = React.useState("");
  
  const handleSubmit = e =>{
    e.preventDefault(); 
    if(onSubmit) 
       onSubmit(value);
    setValue("");
  }

  const handleChange = e =>{
    const newValue = e.currentTarget.value;
    setValue(newValue); 
  }

  return (
    <form aria-label="채팅 메세지 보내기" className={scss.form} onSubmit={handleSubmit}> 
      <div className={scss.wrap}>
        <label htmlFor="input"></label>
        <input autoComplete="false" onChange={handleChange} value={value} id="input" className={scss.input}/>
      </div>
    </form>
  );
}

import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdOutlineMessage, MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
       <Button  text = "VIA SUPPORT CHAT" icon = {<MdOutlineMessage fontSize="24px"/>} />
        <Button  text = "VIA CALL" icon = {<MdPhone fontSize="24px"/>} />
</div>
<Button
isOutline={true}
text="VIA EMAIL FORM" icon = {<MdEmail fontSize="24px"/> }></Button>
   
   <form>
  <div className={styles.form_control}>

  <label htmlFor="name">Name</label>
<input type="text" name="name" />

  </div>




 <div className={styles.form_control}>

  <label htmlFor="email">Email</label>
<input type="email" name="email" />

  </div>


   <div className={styles.form_control}>

  <label htmlFor="name">TEXT</label>
<textarea type="text" rows="8"/>

  </div>
  <div style={{

    display : "flex",
justifyContent : "flex-end"
  }}>

    <Button text="SUBMIT BUTTON"></Button>
  </div>
   

    </form>
   
   
   
   
      </div>
<div className={styles.contact_Image}>

 <img src="/images/service.png" alt="service image" />


</div>




    </section>
  )
}

export default ContactForm

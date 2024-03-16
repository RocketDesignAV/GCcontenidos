import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormContacto = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{7,15}$/.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const phone = formData.get('user_tel');
    const message = formData.get('message');

    const newErrors = {};

    if (!name) {
      newErrors.name = 'El nombre es obligatorio';
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = 'El correo electrónico es inválido';
    }
    if (!phone || !validatePhone(phone)) {
      newErrors.phone = 'El teléfono es inválido';
    }
    if (!message) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setButtonClicked(false); 
      return;
    }

    setButtonClicked(true); 

    emailjs
      .sendForm('service_z5r7eyj', 'template_9q7zoti', form.current, {
        publicKey: '6LwYnkD9-5XEzuhGM',
      })
      .then(
        () => {
          form.current.reset();
          setErrors({});
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setButtonClicked(false); 
      });
  };

  return (
    <div className="text-center">
      {!submitted ? (
        <form className="ml-auto space-y-4" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nombre" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" name="user_name" />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <input type="email" placeholder="Email" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" name="user_email" />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <input type="text" placeholder="Teléfono" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" name="user_tel" />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
          <textarea placeholder="Mensaje" rows="6" className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#a20909]" name="message"></textarea>
          {errors.message && <span className="text-red-500">{errors.message}</span>}
          <button
            type="submit"
            value="Send"
            className={`text-white bg-[#a20909] hover:bg-red-700 font-semibold rounded-md text-sm px-4 py-2.5 w-full btnForm ${buttonClicked ? 'transform scale-95' : ''}`}
            onMouseDown={() => setButtonClicked(true)} 
          >
            {buttonClicked ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mx-auto mb-1"></div> : "Enviar"}
          </button>
        </form>
      ) : (
        <p className="text-white text-agradecimiento">¡Gracias por ponerte en contacto con nosotros!</p>
      )}
    </div>
  );
};

export default FormContacto;

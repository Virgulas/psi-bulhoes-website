import AysiaPic from '../assets/aysia_chatpic.jpg'
import Icon from '../assets/online_icon.png'
import Pop from '../assets/pop.mp3'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React, { useState, useEffect, useRef } from 'react';

function StackingExample() {
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const toastRef = useRef(null);
const delayInSeconds_t1 = 10000;
const delayInSeconds_t2 = 13000;
const time1 = '2 segundos atrás';
const time2 = 'agora mesmo'
const didMessageShow = sessionStorage.getItem('shown');
const audio = new Audio(Pop);

let t_time = time2;
let t2_time = time2;

useEffect(() => {
    // Use setTimeout to show the toast after the specified delay
    if (didMessageShow == null) {
        const timer = setTimeout(() => {
            audio.play()
            setShow(true)
          }, delayInSeconds_t1);
      
        const timer2 = setTimeout(() => {
            audio.play()
            setShow2(true)
            toastRef.current.innerText = time1;
            sessionStorage.setItem('shown', true)
        }, delayInSeconds_t2);
      
          // Clear the timeout when the component unmounts to avoid memory leaks
        return () => {clearTimeout(timer); clearTimeout(timer2)};
    }
  }, []);

const t = (
    <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Header>
        <img src={Icon} className="rounded me-2 toast__icon" alt="" />
        <strong className="me-auto toast__header">Psicóloga Isa</strong>
        <small className="text-muted" ref={toastRef}>{t_time}</small>
        </Toast.Header>
        <Toast.Body>
            <img src={AysiaPic} className="me-2 toast__image" alt="" />
            <p className="toast__text">Ei! Bem vindo! Já agendou uma consulta?</p>
        </Toast.Body>
    </Toast>
    )

const t2 = (
    <Toast onClose={() => setShow2(false)} show={show2}>
        <Toast.Header>
        <img src={Icon} className="rounded me-2 toast__icon" alt="" />
        <strong className="me-auto toast__header">Psicóloga Isa</strong>
        <small className="text-muted">{t2_time}</small>
        </Toast.Header>
        <Toast.Body>
            <img src={AysiaPic} className="me-2 toast__image" alt="" />
            <p className="toast__text">Lembrando que a primeira consulta é gratuita!</p>
        </Toast.Body>
    </Toast>
    )

  return (
    <ToastContainer className="position-fixed rounded mb-4 me-4" position='bottom-end'>
      {t}
      {t2}
    </ToastContainer>
  );
}

export default StackingExample;
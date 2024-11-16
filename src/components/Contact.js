import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        try {
            let response = await fetch("https://localhost:4000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            setButtonText("Send");
            let result = await response.json();
            setFormDetails(formInitialDetails);

            if (result.code === 200) {
                setStatus({ sucess: true, message: 'Message sent Succesfully' });
            } else {
                setStatus({ sucess: false, message: 'Something went wrong, please again later' })
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='aligns-items-center'>
                    <Col md={6} >
                        <img src={contactImg} alt='Contact us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={e => onFormUpdate('firstName', e.target.value)} /></Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={e => onFormUpdate('lastName', e.target.value)} /></Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={e => onFormUpdate('email', e.target.value)} /></Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone' onChange={e => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder='message' onChange={e => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section >

    )
}
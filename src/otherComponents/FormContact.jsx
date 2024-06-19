import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TransitionUp from '../animations/TransitionUp';
import ShowTransition from '../animations/ShowTransition';

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
            'service_fkk8zb8', // Service ID
            'template_eho1o9p', // Template ID
            formData,
            'r31BCimjKhUi33Uso' // Public Key
        )
        .then((response) => {
            console.log('Correo enviado!', response.status, response.text);
            alert('Mensaje enviado correctamente!');
        }, (err) => {
            console.error('Error al enviar el correo:', err);
            alert('Error al enviar el mensaje, por favor intente de nuevo.');
        });
    };

    return (
        <section>
            <div className="flex flex-col min-h-screen">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6 ">
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <TransitionUp>
                                <h1 className="text-xl lg:text-3xl font-semibold text-center">Póngase en contacto con nosotros</h1>
                                <p className="text-sm lg:text-md mt-3 text-center">
                                    ¿Tiene preguntas o desea obtener más información sobre nuestros servicios? Envíenos un mensaje y
                                    ¡Nos pondremos en contacto con usted lo antes posible!
                                </p>
                            </TransitionUp>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <ShowTransition>
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl bg-[#06091a] lg:max-w-xl">
                                    <div className=' text-center'>
                                        <h1 className="text-xl font-medium text-gray-200">Formulario de contacto</h1>
                                    </div>
                                    <form className="mt-6" onSubmit={handleSubmit}>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-200">Nombre Completo</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring" 
                                                required 
                                            />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Email</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring" 
                                                required 
                                            />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Asunto</label>
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                value={formData.subject} 
                                                onChange={handleChange} 
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring" 
                                                required 
                                            />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Mensaje</label>
                                            <textarea 
                                                name="message" 
                                                value={formData.message} 
                                                onChange={handleChange} 
                                                className="block w-full h-32 px-5 py-3 mt-2 border rounded-md md:h-48 bg-gray-900 text-gray-300 border-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring" 
                                                required
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                        >
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </ShowTransition>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormContact;

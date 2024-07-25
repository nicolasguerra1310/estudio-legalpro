import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TransitionUp from '../animations/TransitionUp';
import ShowTransition from '../animations/ShowTransition';

// Lista de códigos de área con paréntesis
const areaCodes = [
    { province: 'Buenos Aires', code: '(011)' },
    { province: 'CABA', code: '(011)' },
    { province: 'Catamarca', code: '(0383)' },
    { province: 'Chaco', code: '(0362)' },
    { province: 'Chubut', code: '(0280)' },
    { province: 'Córdoba', code: '(0351)' },
    { province: 'Corrientes', code: '(0379)' },
    { province: 'Entre Ríos', code: '(0343)' },
    { province: 'Formosa', code: '(0370)' },
    { province: 'Jujuy', code: '(0388)' },
    { province: 'La Pampa', code: '(02302)' },
    { province: 'La Rioja', code: '(0380)' },
    { province: 'Mendoza', code: '(0261)' },
    { province: 'Misiones', code: '(0376)' },
    { province: 'Neuquén', code: '(0299)' },
    { province: 'Río Negro', code: '(02920)' },
    { province: 'Salta', code: '(0387)' },
    { province: 'San Juan', code: '(0264)' },
    { province: 'San Luis', code: '(0266)' },
    { province: 'Santa Cruz', code: '(02966)' },
    { province: 'Santa Fe', code: '(0342)' },
    { province: 'Santiago del Estero', code: '(0385)' },
    { province: 'Tierra del Fuego', code: '(02901)' },
    { province: 'Tucumán', code: '(0381)' }
];

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        areaCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAreaCodeChange = (e) => {
        const { value } = e.target;
        const selectedCode = areaCodes.find(area => area.province === value)?.code || '';

        // Actualiza el estado y reemplaza el código de área en el teléfono
        setFormData({
            ...formData,
            areaCode: selectedCode,
            phone: `${selectedCode} ${formData.phone.replace(/^\(\d{2,4}\)\s?/, '')}`
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const phonePattern = /^\(\d{2,4}\)\s?\d{7}$/;
        if (!phonePattern.test(formData.phone)) {
            alert('Por favor, ingrese un número de teléfono válido.');
            return;
        }

        emailjs.send(
            'service_vyt7yhc', // Service ID
            'template_h03yi9e', // Template ID
            formData,
            'v9T_ApEhc9ZMVZ2s8' // Public Key
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
                                                placeholder="Ingrese su nombre"
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
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
                                                placeholder="Ingrese su correo electronico"
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                                                required
                                            />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Número de Teléfono</label>
                                            <div className="flex">
                                                <select
                                                    name="areaCode"
                                                    value={areaCodes.find(area => area.code === formData.areaCode)?.province || ''}
                                                    onChange={handleAreaCodeChange}
                                                    className="w-2/4 px-5 py-3 mr-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                                                >
                                                    <option value="">Seleccionar Provincia</option>
                                                    {areaCodes.map((area) => (
                                                        <option key={area.code} value={area.province}>
                                                            {area.province}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-2/4 px-5 py-3 border border-gray-300 rounded-md bg-gray-900 text-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                                                    placeholder="Número"
                                                    maxLength="20"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Asunto</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Ingrese el asunto"
                                                className="block w-full px-5 py-3 mt-2 border border-gray-300 rounded-md bg-gray-900 text-gray-300 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                                                required
                                            />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-200">Mensaje</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Ingrese su mensaje"
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
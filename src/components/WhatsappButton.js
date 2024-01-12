import { Whatsapp } from 'react-bootstrap-icons'

export default function WhatsappButton() {
    return (
        <a href='https://wa.me/5581983643267' target="_blank" className='bg-white p-2 m-2 rounded-full'>
            <Whatsapp className='cursor-pointer text-green-600' size={40}/>
        </a>
    )
}
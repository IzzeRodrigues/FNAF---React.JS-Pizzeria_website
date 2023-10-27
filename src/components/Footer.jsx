import logo from '../assets/images/LOGO.png'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram , BsTwitter , BsYoutube} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import codigo from '../assets/images/codigo.png'
import app from '../assets/images/app_store.png'
import play from '../assets/images/play_store.png'


const Footer = () => {
    return(
        <div>
            <div className='bg-white'>
                <div className='mx-[25rem] mt-8 flex justify-between gap-9 items-center p-10'>
                    <div className='w-6/12'>
                        <p className='font-bold text-xl text-red-500'>Já baixou nosso app?</p>
                        <p className='font-medium text-lg mt-5'>Baixe agora lendo o QR code ao lado e tenha acesso a preços e promoções exclusivas.</p>
                    </div>
                    <img className='rounded-2xl w-[8rem]' src={codigo}/>
                    <div className='flex gap-5'>
                        <a href="https://apps.apple.com/br/app/five-nights-at-freddys/id912536422"><button><img className='h-[3rem]' src={app}/></button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.scottgames.fivenightsatfreddys&hl=pt_BR&gl=US"><button><img className='h-[3rem]' src={play}/></button></a>
                    </div>
                </div>
            </div>
            <div className="bg-stone-800">
                <div className='mx-[25rem] py-12'>
                <div className="top flex justify-between">
                    <div>
                        <p className="font-medium text-lg text-white mb-5">Quem somos?</p>
                        <p className='text-white'><a href="#">Nossa História</a></p>
                        <p className='text-white'><a href="#">Seja um Franqueado</a></p>
                    </div>
                    <div>
                        <p className="font-medium text-lg text-white mb-5">Atendimento ao Cliente</p>
                        <p className='text-white'><a href="#">Fale conosco</a></p>
                        <p className='text-white'><a href="#">Pesquisa de Satisfação</a></p>
                    </div>
                    <div>
                        <p className="font-medium text-lg text-white mb-5">Termos</p>
                        <p className='text-white'><a href="#">Política de privacidade</a></p>
                        <p className='text-white'><a href="#">Adendo a política de privacidade</a></p>
                        <p className='text-white'><a href="#">Política de cookies e anúncios</a></p>
                        <p className='text-white'><a href="#">Termos de uso</a></p>
                    </div>
                    <div>
                        <p className="font-medium text-lg text-white mb-5">Conecte-se com a Freddy's</p>
                        <div className='flex justify-between'>
                            <button><p className='text-white text-2xl'><ImFacebook/></p></button>
                            <button><p className='text-white text-2xl'><BsInstagram/></p></button>
                            <button><p className='text-white text-2xl'><FaTiktok/></p></button>
                            <button><p className='text-white text-2xl'><BsTwitter/></p></button>
                            <button><p className='text-white text-2xl'><BsYoutube/></p></button>
                        </div>
                    </div>
                </div>
                <hr className='my-12 opacity-25'/>
                <div className="flex items-center justify-center gap-10">
                    <img src={logo} className='h-[8rem]'/>
                    <p className='text-white w-9/12'>Copyright © @2020 PIMENTA VERDE ALIMENTOS LTDA. – CNPJ :09.060.964/0001-08 - AVENIDA DRA RUTH CARDOSO Nº: 4777 – JARDIM UNIVERSIDADE PINHEIROS – SÃO PAULO/SP. Todos os direitos reservados.</p>
                </div>
                <hr className='my-12 opacity-25'/>
                <div>
                    <p className='text-white'>​​Os preços apresentados já incluem impostos. Imagens meramente ilustrativas. Promoções, combos e preços podem variar de acordo com a sua localização. Se ocorrer qualquer divergência nos valores dos produtos ou promoções, o preço válido é o apresentado no carrinho de compras. Preços e condições de pagamento exclusivos para compras via internet. As promoções são válidas enquanto durarem os estoques. A Pizza Hut se reserva o direito de alterar e/ou remover itens ou promoções do cardápio sem aviso prévio. O horário de funcionamento e de entrega varia de acordo com a sua localização e unidade escolhida. Digite o seu CEP para descobrir se fazemos entregas para a sua região.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
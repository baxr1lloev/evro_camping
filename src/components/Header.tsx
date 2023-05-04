import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";



const Header = () => {

    const [path, setPath] = useState(['Услуги', 'Проживание', 'Программы', 'Виды отдыха', 'Активности', 'Мероприятия', 'Акции'])
    const { asPath } = useRouter()

    return (
        <div className="shadow-lg">
            <div className="max-w-[1440px] w-[1440px] m-auto py-5">
                <div className="max-w-[1440px] w-[1440px] m-auto flex items-center justify-between">
                    <div className="flex">
                        <button className="px-2 py-1 text-[#5E9E02] font-medium text-[14px] bg-[] rounded-[4px] mr-[10px]">Лагеря</button>
                        <button className="px-2 py-1 text-[#02409E] font-medium text-[14px] bg-[] rounded-[4px] mr-[10px]">Туры</button>
                        <button className="px-2 py-1 text-[#fff] font-medium text-[14px] bg-[#BF5002] rounded-[4px] mr-[10px]">Еврокемпинг</button>
                        <button className="px-2 py-1 text-[#9D25A4] font-medium text-[14px] bg-[] rounded-[4px] mr-[10px]">Праздник</button>
                        <button className="px-2 py-1 text-[#F8A405] font-medium text-[14px] bg-[] rounded-[4px] mr-[10px]">Онлайн</button>
                    </div>
                    <div className="flex  items-center justify-between">
                        <p className="text-[#666F78] text-[16px] mr-[10px]">О кемпинге</p>
                        <p className="text-[#666F78] text-[16px] mr-[10px]">Туристам</p>
                        <p className="text-[#666F78] text-[16px] mr-[10px]">Контакты</p>
                        <div className="w-[3px] h-[3px] rounded-[50%] bg-[#C1C4CAFF] mr-[10px]"></div>
                        <p className="text-[#666F78] text-[16px]">Личный кабинет</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[#3E4449] font-bold text-[18px]">+7 495 191-32-92</p>
                        <p className="text-[#666F78] text-[16px] ml-[10px]">Перезвонить</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[20px]">
                    <img src="/images/logo.svg" alt="" />
                    <div className="flex items-center">
                        <Link href={'/servises'}>
                            <p className="font-bold text-[18px] mr-[15px]">Услуги</p>
                        </Link>
                        <Link href={'/placement'}>
                            <p className="font-bold text-[18px] mr-[15px]">Проживание</p>
                        </Link>
                        <Link href={'/programs'}>
                            <p className="font-bold text-[18px] mr-[15px]">Программы</p>
                        </Link>
                        <Link href={'/rest'}>
                            <p className="font-bold text-[18px] mr-[15px]">Виды отдыха</p>
                        </Link>
                        <Link href={'/activites'}>
                            <p className="font-bold text-[18px] mr-[15px]">Активности</p>
                        </Link>
                        <Link href={'/events'}>
                            <p className="font-bold text-[18px] mr-[15px]">Мероприятия</p>
                        </Link>
                        <Link href={'/sales'}>
                            <p className="font-bold text-[18px] mr-[15px]">Акции</p>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href={'/cart'}>
                            <div className="flex items-center">
                                <img src="/images/shoppingCart.svg" alt="" />
                                <p className="ml-[5px]">Корзина</p>
                            </div>
                        </Link>
                        <Link href={'/booking'}>
                            <div className="flex items-center ml-[20px]">
                                <img src="/images/ticket.svg" alt="" />
                                <p className="ml-[10px]">Забронировать</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
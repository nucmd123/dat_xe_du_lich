import {
    ArrowRightEndOnRectangleIcon,
    Bars3Icon,
    ClockIcon,
    MapPinIcon,
    PhoneIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
function BookCar() {
    return (
        <form action="">
            <div className="bg-blue-500 px-2 py-4">
                <div className="mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <label
                        htmlFor="diem-don"
                        className="flex h-full items-center gap-1 bg-orange-500 pl-2 text-white"
                    >
                        <span className="flex items-center">
                            <MapPinIcon className="size-5" />
                        </span>
                        Điểm đón
                    </label>
                    <input
                        id="diem-don"
                        type="text"
                        placeholder="Chọn điểm đón"
                        className="col-span-2 border-none p-2 outline-none"
                    />
                </div>
                <div className="mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <label
                        htmlFor="diem-den"
                        className="flex h-full items-center gap-1 bg-orange-500 pl-2 text-white"
                    >
                        <span className="flex items-center">
                            <MapPinIcon className="size-5" />
                        </span>
                        Điểm đến
                    </label>
                    <input
                        id="diem-den"
                        type="text"
                        placeholder="Chọn điểm đến"
                        className="col-span-2 border-none p-2 outline-none"
                    />
                </div>
                <div className="mb-3 grid grid-cols-2">
                    <div className="flex items-center gap-1">
                        <input
                            id="hai-chieu"
                            type="checkbox"
                            className="size-5 rounded text-white accent-orange-200 focus:accent-orange-200"
                        />
                        <label htmlFor="hai-chieu" className="text-white">
                            Hai chiều
                        </label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input
                            id="vat"
                            type="checkbox"
                            className="size-5 rounded text-white accent-orange-200 focus:accent-orange-200"
                        />
                        <label htmlFor="vat" className="text-white">
                            Vat 10%
                        </label>
                    </div>
                </div>
                <div className="mb-3 h-[2px] w-full rounded-full bg-blue-800"></div>
                <div className="mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <label
                        htmlFor="loai-xe"
                        className="flex h-full items-center gap-1 bg-orange-500 pl-2 text-white"
                    >
                        <span className="flex items-center">
                            <Bars3Icon className="size-5" />
                        </span>
                        Loại xe
                    </label>
                    <select
                        name=""
                        id="loai-xe"
                        className="col-span-2 p-2 text-xl"
                    >
                        <option value="" className="text-base">
                            1
                        </option>
                        <option value="" className="text-base">
                            2
                        </option>
                    </select>
                </div>
                <div className="mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <label
                        htmlFor="ho-ten"
                        className="flex h-full items-center gap-1 bg-orange-500 pl-2 text-white"
                    >
                        <span className="flex items-center">
                            <UserIcon className="size-5" />
                        </span>
                        Họ và tên
                    </label>
                    <input
                        id="ho-ten"
                        type="text"
                        placeholder="Nhập vào họ tên của bạn"
                        className="col-span-2 border-none p-2 outline-none"
                    />
                </div>
                <div className="mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <label
                        htmlFor="so-dien-thoai"
                        className="flex h-full items-center gap-1 bg-orange-500 pl-2 text-white"
                    >
                        <span className="flex items-center">
                            <PhoneIcon className="size-5" />
                        </span>
                        Số điện thoại
                    </label>
                    <input
                        id="so-dien-thoai"
                        type="text"
                        placeholder="Nhập vào số điện thoạt của bạn"
                        className="col-span-2 border-none p-2 outline-none"
                    />
                </div>
                <div className="mb-3">
                    <input type="date" placeholder="đón" />
                </div>
                <div className="relative mb-3 grid grid-cols-3 items-center overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <input
                        id="thoi-gian-cho"
                        type="text"
                        placeholder="Thời gian chờ"
                        className="col-span-3 border-none p-2 pr-9 outline-none"
                    />
                    <span className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ClockIcon className="size-5" />
                    </span>
                </div>
                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-1 rounded-lg bg-orange-500 py-2 text-white"
                >
                    Đặt xe
                    <span>
                        <ArrowRightEndOnRectangleIcon className="size-5" />
                    </span>
                </button>
            </div>
        </form>
    )
}

export default BookCar

import { useState } from 'react'
import './bookcar.css'
import {
    ArrowRightEndOnRectangleIcon,
    Bars3Icon,
    MapPinIcon,
    PhoneIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import { ClockIcon } from '@heroicons/react/24/outline'

function BookCar() {
    const [bookcarDatetime, setBookcarDatetime] = useState<string>()

    return (
        <form action="" className="w-full max-w-lg">
            <div className="bg-blue-500 px-2 py-4">
                <div className="bookcar-input-wrapper">
                    <label
                        htmlFor="pickup-location"
                        className="bookcar-input-label"
                    >
                        <span className="bookcar-input-label-icon">
                            <MapPinIcon className="size-5" />
                        </span>
                        Điểm đón
                    </label>
                    <input
                        id="pickup-location"
                        type="text"
                        placeholder="Chọn điểm đón"
                        className="bookcar-input-box"
                    />
                </div>

                <div className="bookcar-input-wrapper">
                    <label
                        htmlFor="drop-off-location"
                        className="bookcar-input-label"
                    >
                        <span className="bookcar-input-label-icon">
                            <MapPinIcon className="size-5" />
                        </span>
                        Điểm đến
                    </label>
                    <input
                        id="drop-off-location"
                        type="text"
                        placeholder="Chọn điểm đến"
                        className="bookcar-input-box"
                    />
                </div>

                <div className="mb-3 grid grid-cols-2">
                    <div className="bookcar-form-group-checkbox-wrapper">
                        <input
                            id="round-trip-booking"
                            type="checkbox"
                            className="bookcar-form-group-checkbox"
                        />
                        <label
                            htmlFor="round-trip-booking"
                            className="bookcar-form-group-checkbox-label"
                        >
                            Hai chiều
                        </label>
                    </div>
                    <div className="bookcar-form-group-checkbox-wrapper">
                        <input
                            id="vat"
                            type="checkbox"
                            className="bookcar-form-group-checkbox"
                        />
                        <label
                            htmlFor="vat"
                            className="bookcar-form-group-checkbox-label"
                        >
                            Vat 10%
                        </label>
                    </div>
                </div>

                <div className="bookcar-input-wrapper">
                    <label
                        htmlFor="vehicle-type"
                        className="bookcar-input-label"
                    >
                        <span className="flex items-center">
                            <Bars3Icon className="size-5" />
                        </span>
                        Loại xe
                    </label>
                    <select
                        name=""
                        id="vehicle-type"
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

                <div className="bookcar-input-wrapper">
                    <label htmlFor="username" className="bookcar-input-label">
                        <span className="flex items-center">
                            <UserIcon className="size-5" />
                        </span>
                        Họ và tên
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Nhập vào họ tên của bạn"
                        className="bookcar-input-box"
                    />
                </div>

                <div className="bookcar-input-wrapper">
                    <label
                        htmlFor="phone-number"
                        className="bookcar-input-label"
                    >
                        <span className="flex items-center">
                            <PhoneIcon className="size-5" />
                        </span>
                        Số điện thoại
                    </label>
                    <input
                        id="phone-number"
                        type="text"
                        placeholder="Nhập vào số điện thoạt của bạn"
                        className="bookcar-input-box"
                    />
                </div>

                <div className="mb-3 flex flex-col">
                    <label
                        htmlFor="datetime-picker"
                        className="text-base text-white"
                    >
                        Chọn thời gian đón
                    </label>
                    <input
                        id="datetime-picker"
                        type="datetime-local"
                        my-date-format="DD/MM/YYYY, hh:mm:ss"
                        className="rounded-lg border-none p-2 outline-none focus:ring focus:ring-orange-300"
                        onClick={(e) => {
                            const target = e.target as HTMLInputElement
                            target.showPicker()
                        }}
                        onChange={(e) => setBookcarDatetime(e.target.value)}
                    />
                </div>

                <div className="mb-3 flex overflow-hidden rounded-lg focus-within:ring focus-within:ring-orange-300">
                    <input
                        id="waiting-time"
                        type="text"
                        placeholder="Thời gian tài xế chờ, được tính bằng phút. VD: 30 phút, ..."
                        className="flex-grow border-none p-2 outline-none"
                    />
                    <label htmlFor="waiting-time">
                        <span className="flex h-full items-center bg-white p-2">
                            <ClockIcon className="size-5" />
                        </span>
                    </label>
                </div>

                <button type="submit" className="bookcar-form-submit-btn">
                    <span>
                        <ArrowRightEndOnRectangleIcon className="size-5" />
                    </span>
                    Đặt xe
                </button>
            </div>
        </form>
    )
}

export default BookCar

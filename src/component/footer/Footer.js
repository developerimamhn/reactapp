import React from 'react'
import image1 from './Screenshot 2024-07-03 at 6.45.28 PM 1.png'
// import CopyFigmaComponentButton from './copyFigmaToClipboard';




const Footer = () => {
    return (
        <div className='border-[1px] border-[#DEE0D9] '>
            <div className="mx-auto py-[23px] sm:py-[28px] lg:py-[35px] px-[24px] sm:px-0 lg:px-[50px]">
                <div className='flex justify-between items-center'>
                    <div>
                    <svg width="113" height="32" viewBox="0 0 113 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.706 25.38C12.2873 25.38 11.1093 25.0507 10.172 24.392C9.336 23.784 8.69 23.1633 8.234 22.53L7.74 31.498H1.242L0.14 6.988H8.31L8.728 9.116C8.85467 8.91333 9.04467 8.67267 9.298 8.394C9.57667 8.09 10.1467 7.69733 11.008 7.216C11.8947 6.70933 12.8067 6.456 13.744 6.456C14.6813 6.456 15.5553 6.59533 16.366 6.874C17.202 7.15267 18.0127 7.60867 18.798 8.242C19.6087 8.85 20.2547 9.78733 20.736 11.054C21.2427 12.3207 21.496 13.828 21.496 15.576C21.496 18.768 20.774 21.2 19.33 22.872C17.886 24.544 16.0113 25.38 13.706 25.38ZM11.388 11.586C9.716 11.586 8.88 13.106 8.88 16.146C8.88 17.21 9.05733 18.1473 9.412 18.958C9.792 19.7687 10.3493 20.174 11.084 20.174C11.8187 20.174 12.376 19.908 12.756 19.376C13.3387 18.5653 13.63 17.4887 13.63 16.146C13.63 13.106 12.8827 11.586 11.388 11.586ZM30.0911 25.38C28.1405 25.38 26.5318 24.81 25.2651 23.67C24.0238 22.53 23.4031 20.9213 23.4031 18.844C23.4031 16.7413 24.1125 15.2213 25.5311 14.284C26.9498 13.3213 28.6598 12.84 30.6611 12.84C32.6625 12.84 34.3978 13.1567 35.8671 13.79C35.5378 11.6873 34.2078 10.636 31.8771 10.636C30.8131 10.636 29.4958 10.8513 27.9251 11.282L26.9751 7.862C29.2551 6.92467 31.5731 6.456 33.9291 6.456C40.7185 6.456 44.1131 9.344 44.1131 15.12C44.1131 17.096 43.8851 19.832 43.4291 23.328L43.2391 25H36.9691L36.7411 22.91C35.0185 24.5567 32.8018 25.38 30.0911 25.38ZM33.5111 20.668C34.6511 20.668 35.6265 20.3513 36.4371 19.718L36.2091 17.21C35.5758 16.7793 34.8665 16.564 34.0811 16.564C33.3211 16.564 32.6878 16.754 32.1811 17.134C31.6998 17.514 31.4591 17.9827 31.4591 18.54C31.4591 19.0973 31.6491 19.5913 32.0291 20.022C32.4091 20.4527 32.9031 20.668 33.5111 20.668ZM60.7423 6.456C62.5156 6.456 64.0356 7.20333 65.3023 8.698C66.5943 10.1927 67.2403 12.1433 67.2403 14.55C67.2403 16.9313 66.949 20.4147 66.3663 25H59.7163L58.9563 16.488C58.7029 13.7773 57.9683 12.422 56.7523 12.422C55.3083 12.422 54.5356 13.79 54.4343 16.526L54.1683 25H47.1763L46.3783 6.988H54.9663L54.8143 10.218C54.9409 9.96467 55.2323 9.572 55.6883 9.04C56.1443 8.508 56.5876 8.07733 57.0183 7.748C58.1329 6.88667 59.3743 6.456 60.7423 6.456ZM69.3445 15.576C69.3445 13.828 69.5852 12.3207 70.0665 11.054C70.5732 9.78733 71.2319 8.83733 72.0425 8.204C73.5372 7.03867 75.1965 6.456 77.0205 6.456C77.9325 6.456 78.7685 6.646 79.5285 7.026C80.3139 7.38067 80.8585 7.748 81.1625 8.128L81.6185 8.66L81.3145 0.337998H89.9785L88.9525 25H83.2525L82.6065 22.53C81.0865 24.4047 79.2119 25.342 76.9825 25.342C74.7785 25.3673 72.9545 24.544 71.5105 22.872C70.0665 21.2 69.3445 18.768 69.3445 15.576ZM79.4525 11.548C77.9579 11.548 77.2105 13.068 77.2105 16.108C77.2105 16.6653 77.2485 17.1973 77.3245 17.704C77.4005 18.2107 77.6285 18.7427 78.0085 19.3C78.3885 19.8573 78.9459 20.136 79.6805 20.136C80.4152 20.136 80.9725 19.7307 81.3525 18.92C81.7579 18.084 81.9605 17.1467 81.9605 16.108C81.9605 13.068 81.1245 11.548 79.4525 11.548ZM98.7435 25.38C96.7928 25.38 95.1841 24.81 93.9175 23.67C92.6761 22.53 92.0555 20.9213 92.0555 18.844C92.0555 16.7413 92.7648 15.2213 94.1835 14.284C95.6021 13.3213 97.3121 12.84 99.3135 12.84C101.315 12.84 103.05 13.1567 104.519 13.79C104.19 11.6873 102.86 10.636 100.529 10.636C99.4655 10.636 98.1481 10.8513 96.5775 11.282L95.6275 7.862C97.9075 6.92467 100.225 6.456 102.581 6.456C109.371 6.456 112.765 9.344 112.765 15.12C112.765 17.096 112.537 19.832 112.081 23.328L111.891 25H105.621L105.393 22.91C103.671 24.5567 101.454 25.38 98.7435 25.38ZM102.163 20.668C103.303 20.668 104.279 20.3513 105.089 19.718L104.861 17.21C104.228 16.7793 103.519 16.564 102.733 16.564C101.973 16.564 101.34 16.754 100.833 17.134C100.352 17.514 100.111 17.9827 100.111 18.54C100.111 19.0973 100.301 19.5913 100.681 20.022C101.061 20.4527 101.555 20.668 102.163 20.668Z" fill="#90BF0A"/>
                        </svg>

                    </div>
                    <div className=''>
                        <img src={image1} alt=''/>
                    </div>
                        {/* <CopyFigmaComponentButton/> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
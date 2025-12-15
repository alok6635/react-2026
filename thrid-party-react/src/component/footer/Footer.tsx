import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer_cover">
                <div className="container">
                    <div className="top_footer">
                        <div className="footer_content">
                            <h4>About BJS Haulage</h4>
                            <div className="footer_data">
                                <img src="./img/footer_logo.png" alt="" />
                                <p>
                                    BJS Haulage is the UK’s leading national haulage company and can help you to navigate the twists and turns of your day-to-day nationwide transport needs with a service-led approach. We have big trucks, big ambition and huge potential to help you be good at what you do, by being great at what we do.
                                </p>
                            </div>

                        </div>
                        <div className="footer_content">
                            <h4>Address</h4>
                            <p>BJS House, Unit 2, Bull LaneWestern Way, Wednesbury WS10 8RR</p>
                        </div>
                        <div className="footer_content">
                            <a href="tel:01922 645 650">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12.82 10.1733L11.1267 9.97999C10.9276 9.9566 10.7257 9.97865 10.5364 10.0445C10.347 10.1103 10.175 10.2182 10.0333 10.36L8.80667 11.5867C6.91426 10.6239 5.37604 9.08573 4.41333 7.19332L5.64667 5.95999C5.93333 5.67332 6.07333 5.27332 6.02667 4.86666L5.83333 3.18665C5.79568 2.86138 5.63964 2.56134 5.39497 2.34372C5.15031 2.1261 4.83411 2.00612 4.50667 2.00665H3.35333C2.6 2.00665 1.97333 2.63332 2.02 3.38665C2.37333 9.07999 6.92667 13.6267 12.6133 13.98C13.3667 14.0267 13.9933 13.4 13.9933 12.6467V11.4933C14 10.82 13.4933 10.2533 12.82 10.1733Z" fill="#3D4C5E" />
                                </svg>01922 645 650
                            </a>
                            <a href="mailto:customerservice@bjshomedelivery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.156 0.238C0.0552106 0.358099 -2.49856e-05 0.509879 8.47861e-09 0.666667V8.66666C8.47862e-09 9.1971 0.210714 9.70581 0.585786 10.0809C0.960859 10.456 1.46957 10.6667 2 10.6667H11.3333C11.8638 10.6667 12.3725 10.456 12.7475 10.0809C13.1226 9.70581 13.3333 9.1971 13.3333 8.66666V0.673333C13.3343 0.573946 13.3129 0.47561 13.271 0.385522C13.229 0.295435 13.1674 0.215875 13.0907 0.152667C12.972 0.0546842 12.8232 0.000746107 12.6693 5.96973e-09H0.666667C0.569334 -1.30188e-05 0.473178 0.0212871 0.384956 0.0624037C0.296734 0.10352 0.218585 0.163456 0.156 0.238ZM1.33333 2.276V8.66666C1.33333 8.84348 1.40357 9.01305 1.5286 9.13807C1.65362 9.26309 1.82319 9.33333 2 9.33333H11.3333C11.5101 9.33333 11.6797 9.26309 11.8047 9.13807C11.9298 9.01305 12 8.84348 12 8.66666V2.276L7.138 7.138C7.01298 7.26298 6.84344 7.33319 6.66667 7.33319C6.48989 7.33319 6.32035 7.26298 6.19533 7.138L1.33333 2.276Z" fill="#3D4C5E" />
                                </svg>
                                customerservice@bjshomedelivery
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom_footer">
                    <div className="container">
                        <div className="bookmark">
                            <h4>©BJS Distribution Limited, 2025 - All rights reserved.</h4>
                            <ul>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">CCTV Policy</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
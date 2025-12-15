import React from 'react'
import "./description.css";

const Description = () => {
    return (
        <section className="description">
            <div className="container">
                <div className="description_data">
                    <div className="description_cover">

                        <div className="des_overview">
                            <h4>Description</h4>
                            <p>The airbag system is not functioning as expected. Airbag warning light staying on or flashing. Airbag not deploying during impact. This defect can compromise passenger safety and must be inspected and repaired immediately.</p>
                        </div>
                        <div className="resources_cover">
                            <div className="resources">
                                <h4>Resources</h4>
                                <ul>
                                    <li className="photos">Photos</li>
                                    <li>Videos</li>
                                    <li>Documents</li>
                                </ul>
                            </div>
                            <section className="drag_drop">
                                <div className="drag">
                                    <div className="drag_items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 36 29" fill="none">
                                            <path d="M8.84091 22.75C6.76137 22.75 4.767 21.9598 3.29655 20.5533C1.82609 19.1468 1 17.2391 1 15.25C1 13.2609 1.82609 11.3532 3.29655 9.9467C4.767 8.54018 6.76137 7.75 8.84091 7.75C9.33205 5.56196 10.7688 3.63914 12.8352 2.40452C13.8584 1.79321 15.0053 1.36925 16.2105 1.15685C17.4157 0.944463 18.6556 0.947797 19.8594 1.16667C21.0632 1.38554 22.2073 1.81566 23.2264 2.43247C24.2455 3.04928 25.1196 3.8407 25.7988 4.76155C26.4781 5.68239 26.9492 6.71463 27.1851 7.79933C27.4211 8.88402 27.4174 9.99993 27.1742 11.0833H28.8409C30.388 11.0833 31.8717 11.6979 32.9657 12.7919C34.0597 13.8858 34.6742 15.3696 34.6742 16.9167C34.6742 18.4638 34.0597 19.9475 32.9657 21.0415C31.8717 22.1354 30.388 22.75 28.8409 22.75H27.1742" stroke="#546881" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.1743 17.75L17.1743 12.75M17.1743 12.75L22.1743 17.75M17.1743 12.75V27.75" stroke="#546881" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h4>Drag & drop it here or Choose a file</h4>
                                        <span>Supported format csv, xls, csv etc.</span>
                                        <div className="upload">Upload file</div>
                                    </div>
                                </div>
                            </section>
                            <div className="uploaded">
                                <h4>Uploaded Files</h4>
                                <div className="pdf_cover">
                                    <div className="upload_data">
                                        <div className="pdf_data">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
                                                <path d="M12.2788 0.744141H22.2036L32.3726 10.9131V27.5352C32.3724 29.59 30.7058 31.2559 28.6509 31.2559H12.2788C10.224 31.2557 8.55825 29.59 8.55811 27.5352V4.46484C8.55825 2.41005 10.224 0.744288 12.2788 0.744141Z" fill="#EEF1F7" stroke="#CBD0DC" stroke-width="1.48837" />
                                                <rect y="14.1395" width="22.3256" height="13.0233" rx="2.60465" fill="#D82042" />
                                                <path d="M3.7002 23.8139V17.5898H5.91875C6.40298 17.5898 6.80414 17.678 7.12224 17.8542C7.44033 18.0305 7.67839 18.2716 7.83643 18.5776C7.99446 18.8815 8.07348 19.2239 8.07348 19.6048C8.07348 19.9877 7.99345 20.3321 7.83339 20.6381C7.67535 20.942 7.43628 21.1831 7.11616 21.3614C6.79806 21.5377 6.39791 21.6258 5.91571 21.6258H4.39007V20.8295H5.83061C6.13655 20.8295 6.38474 20.7769 6.5752 20.6715C6.76565 20.5641 6.90545 20.4182 6.99459 20.2339C7.08374 20.0495 7.12831 19.8398 7.12831 19.6048C7.12831 19.3698 7.08374 19.1611 6.99459 18.9787C6.90545 18.7964 6.76463 18.6535 6.57216 18.5502C6.38171 18.4469 6.13047 18.3952 5.81846 18.3952H4.63928V23.8139H3.7002Z" fill="white" />
                                                <path d="M11.1893 23.8139H9.1744V17.5898H11.2531C11.863 17.5898 12.3867 17.7144 12.8244 17.9637C13.262 18.2108 13.5973 18.5664 13.8303 19.0304C14.0653 19.4923 14.1829 20.0465 14.1829 20.6928C14.1829 21.3411 14.0643 21.8983 13.8273 22.3643C13.5923 22.8303 13.2519 23.1889 12.8061 23.4401C12.3604 23.6893 11.8215 23.8139 11.1893 23.8139ZM10.1135 22.9934H11.1377C11.6118 22.9934 12.0058 22.9042 12.3199 22.7259C12.6339 22.5456 12.8689 22.2853 13.025 21.9449C13.181 21.6025 13.259 21.1851 13.259 20.6928C13.259 20.2045 13.181 19.7902 13.025 19.4498C12.871 19.1094 12.641 18.8511 12.3351 18.6748C12.0291 18.4985 11.6492 18.4104 11.1954 18.4104H10.1135V22.9934Z" fill="white" />
                                                <path d="M15.3506 23.8139V17.5898H19.2103V18.3982H16.2897V20.2947H18.9337V21.1H16.2897V23.8139H15.3506Z" fill="white" />
                                            </svg>
                                            <div>

                                                <h4>Airbag-certificate.pdf</h4>
                                                <h5>94 KB of 94 KB   <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.99998 1.33331C4.32665 1.33331 1.33331 4.32665 1.33331 7.99998C1.33331 11.6733 4.32665 14.6666 7.99998 14.6666C11.6733 14.6666 14.6666 11.6733 14.6666 7.99998C14.6666 4.32665 11.6733 1.33331 7.99998 1.33331ZM11.1866 6.46665L7.40665 10.2466C7.31331 10.34 7.18665 10.3933 7.05331 10.3933C6.91998 10.3933 6.79331 10.34 6.69998 10.2466L4.81331 8.35998C4.61998 8.16665 4.61998 7.84665 4.81331 7.65331C5.00665 7.45998 5.32665 7.45998 5.51998 7.65331L7.05331 9.18665L10.48 5.75998C10.6733 5.56665 10.9933 5.56665 11.1866 5.75998C11.38 5.95331 11.38 6.26665 11.1866 6.46665Z" fill="#3EBF8F" />
                                                </svg></i>
                                                    Completed
                                                </h5>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M16.6666 7.25H3.33331C3.16755 7.25 3.00858 7.18415 2.89137 7.06694C2.77416 6.94973 2.70831 6.79076 2.70831 6.625C2.70831 6.45924 2.77416 6.30027 2.89137 6.18306C3.00858 6.06585 3.16755 6 3.33331 6H16.6666C16.8324 6 16.9914 6.06585 17.1086 6.18306C17.2258 6.30027 17.2916 6.45924 17.2916 6.625C17.2916 6.79076 17.2258 6.94973 17.1086 7.06694C16.9914 7.18415 16.8324 7.25 16.6666 7.25Z" fill="#546881" />
                                            <path d="M13.7 17.2916H6.30002C6.03593 17.3097 5.77088 17.2752 5.52024 17.19C5.2696 17.1049 5.03836 16.9708 4.83992 16.7956C4.64148 16.6205 4.47978 16.4076 4.36422 16.1695C4.24865 15.9313 4.18151 15.6726 4.16669 15.4083V6.66664C4.16669 6.50088 4.23253 6.34191 4.34975 6.2247C4.46696 6.10749 4.62593 6.04164 4.79169 6.04164C4.95745 6.04164 5.11642 6.10749 5.23363 6.2247C5.35084 6.34191 5.41669 6.50088 5.41669 6.66664V15.4083C5.41669 15.75 5.80835 16.0416 6.25002 16.0416H13.65C14.1167 16.0416 14.4834 15.75 14.4834 15.4083V6.66664C14.4834 6.48762 14.5545 6.31593 14.6811 6.18935C14.8076 6.06276 14.9793 5.99164 15.1584 5.99164C15.3374 5.99164 15.5091 6.06276 15.6357 6.18935C15.7622 6.31593 15.8334 6.48762 15.8334 6.66664V15.4083C15.8185 15.6726 15.7514 15.9313 15.6358 16.1695C15.5203 16.4076 15.3586 16.6205 15.1601 16.7956C14.9617 16.9708 14.7304 17.1049 14.4798 17.19C14.2292 17.2752 13.9641 17.3097 13.7 17.2916ZM13.8 6.45831C13.7176 6.45943 13.6359 6.44403 13.5595 6.41302C13.4832 6.38201 13.4138 6.33601 13.3556 6.27775C13.2973 6.21949 13.2513 6.15014 13.2203 6.07381C13.1893 5.99747 13.1739 5.9157 13.175 5.83331V4.59164C13.175 4.24998 12.775 3.95831 12.3417 3.95831H7.68335C7.22502 3.95831 6.85002 4.24998 6.85002 4.59164V5.83331C6.85002 5.99907 6.78417 6.15804 6.66696 6.27525C6.54975 6.39246 6.39078 6.45831 6.22502 6.45831C6.05926 6.45831 5.90029 6.39246 5.78308 6.27525C5.66587 6.15804 5.60002 5.99907 5.60002 5.83331V4.59164C5.63229 4.06774 5.86838 3.57728 6.25776 3.22528C6.64714 2.87328 7.15886 2.68772 7.68335 2.70831H12.3167C12.8454 2.68097 13.3635 2.86349 13.7584 3.21619C14.1532 3.56888 14.3928 4.06321 14.425 4.59164V5.83331C14.4261 5.91608 14.4108 5.99825 14.3799 6.07505C14.3489 6.15184 14.3031 6.22173 14.2449 6.28065C14.1868 6.33957 14.1175 6.38635 14.0411 6.41828C13.9648 6.45021 13.8828 6.46665 13.8 6.46664V6.45831Z" fill="#546881" />
                                            <path d="M8.51666 14.1667C8.35157 14.1645 8.19385 14.098 8.07711 13.9812C7.96036 13.8645 7.89382 13.7068 7.89166 13.5417V9.76666C7.89166 9.6009 7.95751 9.44193 8.07472 9.32472C8.19193 9.20751 8.3509 9.14166 8.51666 9.14166C8.68242 9.14166 8.84139 9.20751 8.9586 9.32472C9.07581 9.44193 9.14166 9.6009 9.14166 9.76666V13.5333C9.14277 13.6161 9.12742 13.6983 9.0965 13.7751C9.06559 13.8519 9.01972 13.9217 8.96158 13.9807C8.90343 14.0396 8.83416 14.0864 8.75778 14.1183C8.6814 14.1502 8.59944 14.1667 8.51666 14.1667ZM11.4833 14.1667C11.3176 14.1667 11.1586 14.1008 11.0414 13.9836C10.9242 13.8664 10.8583 13.7074 10.8583 13.5417V9.76666C10.8583 9.6009 10.9242 9.44193 11.0414 9.32472C11.1586 9.20751 11.3176 9.14166 11.4833 9.14166C11.6491 9.14166 11.8081 9.20751 11.9253 9.32472C12.0425 9.44193 12.1083 9.6009 12.1083 9.76666V13.5333C12.1083 13.6999 12.0428 13.8597 11.9258 13.9782C11.8088 14.0968 11.6499 14.1645 11.4833 14.1667Z" fill="#546881" />
                                        </svg>


                                    </div>
                                    <div className="file_type">
                                        <h4>File Type  <br /> Breakdown</h4>
                                    </div>
                                    <div className="pdf_profile">
                                        <img src="./img//img1.png" alt="" />
                                        <h4>Admin Transport <br />Austin Robertson</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vechile">
                                <div className="vechile_cover">
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />

                                </div>
                                <div className="save">Save</div>

                            </div>

                        </div>
                    </div>

                    <div className="notes_cover">
                        <div className="notes">
                            <h4>Notes</h4>
                        </div>
                        <ul>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li className="text_area">
                                <textarea>
                                </textarea>
                                <img src="./img/subscribe.png" alt="subscribe" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description
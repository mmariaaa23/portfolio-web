const Contacts = () => {
    return (<main className="section">
                <div className="container">
                        <h1 className="title-1">Contacts</h1>

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Location</h2>
                                <p>Moscow, Sochi Russia</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Telegram / WhatsApp</h2>
                                <p><a href="tel:+79384581835">+7 (938) 458-18-35</a></p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Email</h2>
                                <p><a href="mailto: mmariaaa23@gmail.com">mmariaaa23@gmail.com</a></p>
                            </li>
                        </ul>

                </div>
            </main>);
}
 
export default Contacts;
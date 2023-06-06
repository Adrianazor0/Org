import "./Footer.css"

const Footer = () => {
    return <footer className = "footer" style = {{backgroundImage : "url(/img/footer.png)"}}>
        <div className = "redes">
            <a href = "https://www.facebook.com/adrian.azormiguel/">
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href = "https://instagram.com/adrianazormiguel?igshid=ZDc4ODBmNjlmNQ==">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
            <a href = "https://twitter.com/azor_adrian">
                <img src="/img/twitter.png" alt="Twitter"/>
            </a>
        </div>
        <img src="/img/logoFooter.png" alt="Org"/>
        <strong>Desarrollado por Adrian Azor</strong>
    </footer>
}

export default Footer
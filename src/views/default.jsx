const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>GameStore</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/gamecart">Game Cart</a>
                        </li>
                        <li>
                            <a href="">Search Game</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
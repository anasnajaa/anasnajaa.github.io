import React from 'react';
import Helmet from "react-helmet";

export default () => {
    return (
        <Helmet>
            <title>Anas Najaa</title>
            <meta name="description" content="Anas Najaa's Personal Website."/>

            <meta itemprop="name" content="Anas Najaa"/>
            <meta itemprop="description" content="Anas Najaa's Personal Website."/>
            <meta itemprop="image" content="https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"/>

            <meta property="og:url" content="https://anasnajaa.github.io"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Anas Najaa"/>
            <meta property="og:description" content="Anas Najaa's Personal Website."/>
            <meta property="og:image" content="https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Anas Najaa"/>
            <meta name="twitter:description" content="Anas Najaa's Personal Website."/>
            <meta name="twitter:image" content="https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"/>
        </Helmet>
    )
}

function GlobalHead({
    fontawesome = false,
}) {

    return (
        <>

            {fontawesome && <link
                rel="stylesheet"
                href={`https://cdn.articles.media/fonts/fontawesome/css/all.min.css`} 
            />}

        </>
    )
}

export default GlobalHead;